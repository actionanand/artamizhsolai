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
          <div 
            *ngFor="let platform of enabledPlatforms" 
            class="donation-platform"
            [class.qr-platform]="platform.type === 'qr'"
            (click)="handleDonationClick(platform)"
            (mouseenter)="showQrTooltip(platform, $event)"
            (mouseleave)="hideQrTooltip()"
            [title]="platform.description"
          >
            <span class="platform-name">{{ platform.name }}</span>
            
            <!-- QR Code Tooltip -->
            <div 
              *ngIf="showQrPopup && selectedPlatform?.name === platform.name && platform.type === 'qr'"
              class="qr-tooltip"
              [style.left.px]="tooltipPosition.x"
              [style.top.px]="tooltipPosition.y"
            >
              <div class="qr-content">
                <p class="qr-instructions">Scan to pay via UPI</p>
                <div class="qr-image-container">
                  <img 
                    *ngIf="platform.qrImage" 
                    [src]="getQrImagePath(platform.qrImage)"
                    [alt]="'QR code for ' + platform.name"
                    class="qr-image"
                  />
                  <div class="qr-upi-id">
                    <p>{{ getUpiId(platform.qrData) }}</p>
                  </div>
                </div>
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
  showQrPopup = false;
  selectedPlatform: DonationPlatform | null = null;
  tooltipPosition = { x: 0, y: 0 };

  ngOnInit() {
    this.enabledPlatforms = donationPlatforms.filter(platform => platform.enabled);
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

  handleDonationClick(platform: DonationPlatform) {
    console.log('Donation click:', platform.name, platform.type, platform.url);
    
    if (platform.type === 'redirect') {
      // Open external link in new tab
      if (platform.url) {
        window.open(platform.url, '_blank', 'noopener,noreferrer');
      } else {
        console.warn('No URL provided for redirect platform:', platform.name);
      }
    } else if (platform.type === 'qr') {
      // For QR codes, toggle tooltip visibility
      this.showQrPopup = !this.showQrPopup;
      this.selectedPlatform = this.showQrPopup ? platform : null;
      console.log('QR popup state:', this.showQrPopup, this.selectedPlatform?.name);
    }
  }

  showQrTooltip(platform: DonationPlatform, event: MouseEvent) {
    if (platform.type === 'qr') {
      this.showQrPopup = true;
      this.selectedPlatform = platform;
      this.tooltipPosition = {
        x: event.clientX - 100, // Center tooltip better
        y: event.clientY - 150  // Position above cursor
      };
      console.log('Showing QR tooltip for:', platform.name);
    }
  }

  hideQrTooltip() {
    // Only hide if not clicked (clicked state is managed by handleDonationClick)
    setTimeout(() => {
      if (this.selectedPlatform && this.showQrPopup) {
        // Don't auto-hide if tooltip was clicked to stay visible
        return;
      }
      this.showQrPopup = false;
      this.selectedPlatform = null;
    }, 300);
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