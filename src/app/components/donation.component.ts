import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { donationConfig, donationPlatforms, DonationPlatform } from '../config/donation-config';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="donation-section" *ngIf="shouldShowDonation">
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
            *ngFor="let platform of qrPlatforms"
            type="button"
            class="donation-platform qr-platform"
            [title]="platform.description"
            (click)="toggleQrModal(platform)"
          >
            <span class="platform-name">{{ platform.name }}</span>
          </button>
        </div>
      </div>
      
      <!-- QR Modal Overlay -->
      <div 
        *ngIf="showQrModal" 
        class="qr-modal-overlay"
        (click)="closeQrModal()"
      >
        <div class="qr-modal" (click)="$event.stopPropagation()">
          <div class="qr-modal-header">
            <h4>Scan to Pay via UPI</h4>
            <button class="qr-close-btn" (click)="closeQrModal()">&times;</button>
          </div>
          <div class="qr-modal-content">
            <div class="qr-image-container" *ngIf="selectedPlatform">
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
    </div>
  `,
  styleUrls: ['../../styles/donation.css']
})
export class DonationComponent implements OnInit {
  @Input() postAttributes?: PostAttributes | Record<string, never>;
  
  donationConfig = donationConfig;
  enabledPlatforms: DonationPlatform[] = [];
  redirectPlatforms: DonationPlatform[] = [];
  qrPlatforms: DonationPlatform[] = [];
  showQrModal = false;
  selectedPlatform: DonationPlatform | null = null;

  ngOnInit() {
    this.enabledPlatforms = donationPlatforms.filter(platform => platform.enabled);
    this.redirectPlatforms = this.enabledPlatforms.filter(platform => platform.type === 'redirect');
    this.qrPlatforms = this.enabledPlatforms.filter(platform => platform.type === 'qr');
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

  toggleQrModal(platform: DonationPlatform): void {
    console.log('Opening QR modal for:', platform.name);
    this.selectedPlatform = platform;
    this.showQrModal = true;
  }

  closeQrModal(): void {
    console.log('Closing QR modal');
    this.showQrModal = false;
    this.selectedPlatform = null;
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
    return `${basePath}/${imageName}`;
  }
}