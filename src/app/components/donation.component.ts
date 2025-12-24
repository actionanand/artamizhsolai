import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { donationConfig, donationPlatforms, DonationPlatform } from '../config/donation-config';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="shouldShowDonation">
      <div class="donation-section">
        <div class="donation-container">
          <div class="donation-header">
            <h3 class="donation-title">{{ donationConfig.sectionTitle }}</h3>
            <p class="donation-message" *ngIf="getDonationMessage()">
              {{ getDonationMessage() }}
            </p>
          </div>
          
          <div class="donation-platforms">
            <!-- External link platforms -->
            <a 
              *ngFor="let platform of redirectPlatforms"
              [href]="platform.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="donation-platform redirect-platform"
              [title]="platform.description"
            >
              <span class="platform-name">{{ platform.name }}</span>
            </a>
            
            <!-- QR code platforms -->
            <button
              *ngFor="let platform of qrPlatforms; let i = index"
              type="button"
              [id]="'gpay-btn-' + i"
              class="donation-platform qr-platform"
              [title]="platform.description"
              [attr.data-platform]="platform.name"
            >
              <span class="platform-name">{{ platform.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </ng-container>
    
    <!-- QR Modal Overlay - Always in DOM outside conditional -->
    <div 
      id="qr-modal-overlay"
      class="qr-modal-overlay"
      [class.show]="showQrModal"
      (click)="closeQrModal()"
    >
      <div class="qr-modal" (click)="stopPropagation($event)">
        <div class="qr-modal-header">
          <h4>Scan to Pay via UPI</h4>
          <button 
            type="button" 
            class="qr-close-btn" 
            (click)="closeQrModal()"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div class="qr-modal-content">
          <div class="qr-image-container" *ngIf="selectedPlatform">
            <p style="margin: 0 0 1rem 0; color: #666; text-align: center;">{{ selectedPlatform.name }}</p>
            <img 
              *ngIf="selectedPlatform.qrImage" 
              [src]="getQrImagePath(selectedPlatform.qrImage)"
              [alt]="'QR code for ' + selectedPlatform.name"
              class="qr-image"
            />
            <div class="qr-upi-id">
              <p>{{ getUpiId(selectedPlatform.qrData) }}</p>
              <small>UPI ID</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../../styles/donation.css']
})
export class DonationComponent implements OnInit, AfterViewInit {
  @Input() postAttributes?: PostAttributes | Record<string, never>;
  
  donationConfig = donationConfig;
  enabledPlatforms: DonationPlatform[] = [];
  redirectPlatforms: DonationPlatform[] = [];
  qrPlatforms: DonationPlatform[] = [];
  showQrModal = false;
  selectedPlatform: DonationPlatform | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('DonationComponent constructor called');
  }

  ngOnInit() {
    this.enabledPlatforms = donationPlatforms.filter(platform => platform.enabled);
    this.redirectPlatforms = this.enabledPlatforms.filter(platform => platform.type === 'redirect');
    this.qrPlatforms = this.enabledPlatforms.filter(platform => platform.type === 'qr');
    
    console.log('Donation platforms initialized:', {
      total: this.enabledPlatforms.length,
      redirect: this.redirectPlatforms.length,
      qr: this.qrPlatforms.length,
      qrPlatforms: this.qrPlatforms.map(p => p.name)
    });
  }

  ngAfterViewInit() {
    // Only run event listener attachment in the browser, not on server
    if (typeof window === 'undefined') {
      console.log('Server-side rendering detected, skipping event listener attachment');
      return;
    }

    console.log('\n========== AfterViewInit - Attaching Document-Level Click Listener ==========');
    
    // Attach listener at DOCUMENT level instead of element level
    // This survives DOM re-renders and Angular hydration
    const unsubscribe = this.renderer.listen('document', 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Check if clicked element is a QR platform button
      const button = target.closest('.qr-platform');
      if (button) {
        const platformName = (button as HTMLElement).getAttribute('data-platform');
        console.log(`\n🔥 QR Platform button clicked: ${platformName}`);
        
        event.preventDefault();
        event.stopPropagation();
        
        // Find the corresponding platform
        const platform = this.qrPlatforms.find(p => p.name === platformName);
        if (platform) {
          console.log(`Found platform: ${platform.name}, calling handleGPayClick...`);
          this.handleGPayClick(platform, 0);
        }
        return;
      }
      
      // Check if clicked element is the close button
      const closeBtn = target.closest('.qr-close-btn');
      if (closeBtn) {
        console.log('\n✕ Close button clicked');
        event.preventDefault();
        event.stopPropagation();
        this.closeQrModal();
        return;
      }
      
      // Check if clicked on overlay background (outside modal)
      if (target.id === 'qr-modal-overlay') {
        console.log('\n⊗ Overlay background clicked');
        event.preventDefault();
        event.stopPropagation();
        this.closeQrModal();
        return;
      }
    });
    
    console.log('✓ Document-level click listener attached');
    console.log('========== Ready to handle clicks ==========\n');
  }

  get shouldShowDonation(): boolean {
    // Check global configuration
    if (!donationConfig.enabled) {
      // If globally disabled, check if post specifically enables it
      return this.getPostAttribute('enableDonation') === true;
    }

    // If globally enabled, check if post specifically disables it
    if (this.getPostAttribute('enableDonation') === false) {
      return false;
    }

    // If globally enabled and showing on all posts
    if (donationConfig.showOnAllPosts) {
      return true;
    }

    // If not showing on all posts by default, check post-specific setting
    return this.getPostAttribute('enableDonation') === true;
  }

  private getPostAttribute(key: keyof PostAttributes): any {
    if (!this.postAttributes || Object.keys(this.postAttributes).length === 0) {
      return undefined;
    }
    return (this.postAttributes as PostAttributes)[key];
  }

  handleGPayClick(platform: DonationPlatform, index: number): void {
    console.log('\n========== GPay Click Handler ==========');
    console.log('Platform name:', platform.name);
    
    this.selectedPlatform = platform;
    this.showQrModal = true;
    
    console.log('After - showQrModal:', this.showQrModal);
    console.log('After - selectedPlatform:', this.selectedPlatform?.name);
    
    // Trigger change detection
    this.cdr.markForCheck();
    this.cdr.detectChanges();
    
    // Manually populate modal content in DOM
    setTimeout(() => {
      const modalContent = document.querySelector('.qr-modal-content');
      if (modalContent && this.selectedPlatform) {
        console.log('Populating modal content for:', this.selectedPlatform.name);
        
        // Build HTML content
        let html = `<div class="qr-image-container">`;
        html += `<p style="margin: 0 0 1rem 0; color: #666; text-align: center;">${this.selectedPlatform.name}</p>`;
        
        if (this.selectedPlatform.qrImage) {
          const qrPath = `/${this.selectedPlatform.qrImage}`;
          console.log('QR image path:', qrPath);
          html += `<img src="${qrPath}" alt="QR code for ${this.selectedPlatform.name}" class="qr-image" style="max-width: 200px; max-height: 200px; border-radius: 8px; border: 1px solid #dee2e6; background: white; display: block; margin: 0 auto;" />`;
        }
        
        html += `<div class="qr-upi-id"><p>${this.getUpiId(this.selectedPlatform.qrData)}</p><small>UPI ID</small></div>`;
        html += `</div>`;
        
        modalContent.innerHTML = html;
        console.log('Modal content populated');
      }
      
      // Add show class to overlay
      const overlay = document.getElementById('qr-modal-overlay');
      if (overlay) {
        overlay.classList.add('show');
        console.log('Show class added to modal');
      }
    }, 50);
    
    console.log('========== Handler Complete ==========\n');
  }

  closeQrModal(): void {
    console.log('\n========== Close Modal Called ==========');
    
    this.showQrModal = false;
    this.selectedPlatform = null;
    
    this.cdr.markForCheck();
    this.cdr.detectChanges();
    
    // Manually update modal
    setTimeout(() => {
      const modalContent = document.querySelector('.qr-modal-content');
      if (modalContent) {
        modalContent.innerHTML = ''; // Clear content
      }
      
      const overlay = document.getElementById('qr-modal-overlay');
      if (overlay) {
        overlay.classList.remove('show');
        console.log('Modal show class removed');
      }
    }, 0);
    
    console.log('========== Close Complete ==========\n');
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  getDonationMessage(): string {
    // Check if post has a custom donation message
    const customMessage = this.getPostAttribute('donationMessage');
    return customMessage || donationConfig.message || '';
  }

  getUpiId(qrData: string | undefined): string {
    if (!qrData) return '';
    
    const match = qrData.match(/pa=([^&]*)/);
    return match ? decodeURIComponent(match[1]) : '';
  }

  getQrImagePath(imageName: string): string {
    // Handle relative paths for GitHub Pages deployment
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    const basePath = baseHref.endsWith('/') ? baseHref.slice(0, -1) : baseHref;
    const fullPath = `${basePath}/${imageName}`;
    
    console.log('QR Image path calculation:', {
      imageName,
      baseHref,
      basePath,
      fullPath
    });
    
    return fullPath;
  }
}