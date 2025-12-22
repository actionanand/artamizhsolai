import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

interface StoredPassword {
  passwordHash: string;
  unlockedAt: number; // timestamp
}

@Injectable({
  providedIn: 'root',
})
export class PasswordProtectionService {
  private isBrowser: boolean;
  private readonly STORAGE_KEY = 'article_password_session';
  private readonly PASSWORD_EXPIRATION_MS = environment.passwordExpirationHours * 60 * 60 * 1000;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.cleanupExpiredPassword();
  }

  /**
   * SHA1 hash implementation (client-side)
   */
  private async sha1(input: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Verify password against the stored hash
   */
  async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    const hash = await this.sha1(password);
    return hash === hashedPassword;
  }

  /**
   * Mark an article as unlocked with timestamp
   */
  unlockArticle(passwordHash: string): void {
    if (!this.isBrowser) return;

    try {
      const stored: StoredPassword = {
        passwordHash,
        unlockedAt: Date.now(),
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stored));
      console.log('Password saved to localStorage:', { passwordHash: passwordHash.substring(0, 10) + '...', timestamp: stored.unlockedAt });
    } catch (e) {
      console.error('Failed to save password:', e);
    }
  }

  /**
   * Check if a password is valid and not expired
   */
  isPasswordValid(expectedHash: string): boolean {
    if (!this.isBrowser) return false;

    const stored = this.getStoredPassword();
    if (!stored) {
      console.log('No stored password found');
      return false;
    }

    // Check if password matches
    if (stored.passwordHash !== expectedHash) {
      console.log('Stored hash does not match expected hash');
      console.log('Stored:', stored.passwordHash);
      console.log('Expected:', expectedHash);
      return false;
    }

    // Check if password has expired
    const now = Date.now();
    const elapsed = now - stored.unlockedAt;

    if (elapsed > this.PASSWORD_EXPIRATION_MS) {
      // Password expired, remove it
      console.log('Password expired');
      this.clearPassword();
      return false;
    }

    console.log('Password is valid');
    return true;
  }

  /**
   * Clear the stored password
   */
  clearPassword(): void {
    if (!this.isBrowser) return;

    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear password:', e);
    }
  }

  /**
   * Get stored password from localStorage
   */
  private getStoredPassword(): StoredPassword | null {
    if (!this.isBrowser) return null;

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as StoredPassword;
        console.log('Retrieved password from localStorage:', { hash: parsed.passwordHash.substring(0, 10) + '...', timestamp: parsed.unlockedAt });
        return parsed;
      }
    } catch (e) {
      console.error('Failed to parse stored password:', e);
    }
    return null;
  }

  /**
   * Get stored password details (for debugging)
   */
  getStoredPasswordDetails(): { hash: string; timestamp: number; isExpired: boolean } | null {
    if (!this.isBrowser) return null;

    const stored = this.getStoredPassword();
    if (!stored) {
      return null;
    }

    const now = Date.now();
    const elapsed = now - stored.unlockedAt;
    const isExpired = elapsed > this.PASSWORD_EXPIRATION_MS;

    return {
      hash: stored.passwordHash,
      timestamp: stored.unlockedAt,
      isExpired,
    };
  }

  /**
   * Cleanup expired password on initialization
   */
  private cleanupExpiredPassword(): void {
    if (!this.isBrowser) return;

    try {
      const stored = this.getStoredPassword();
      if (stored) {
        const now = Date.now();
        const elapsed = now - stored.unlockedAt;
        if (elapsed > this.PASSWORD_EXPIRATION_MS) {
          console.log('Password has expired, clearing it');
          this.clearPassword();
        }
      }
    } catch (e) {
      console.error('Failed to cleanup expired password:', e);
    }
  }
}