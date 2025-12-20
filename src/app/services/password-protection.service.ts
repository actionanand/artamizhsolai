import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface UnlockedArticle {
  slug: string;
  unlockedAt: number; // timestamp
}

@Injectable({
  providedIn: 'root',
})
export class PasswordProtectionService {
  private unlockedArticles = new BehaviorSubject<Set<string>>(new Set());
  public unlockedArticles$ = this.unlockedArticles.asObservable();
  private isBrowser: boolean;
  private readonly STORAGE_KEY = 'unlocked_articles_with_time';
  private readonly PASSWORD_EXPIRATION_MS = environment.passwordExpirationHours * 60 * 60 * 1000;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadUnlockedArticles();
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
  unlockArticle(slug: string): void {
    if (!this.isBrowser) return;

    const unlocked = this.unlockedArticles.value;
    unlocked.add(slug);
    this.unlockedArticles.next(unlocked);
    this.saveUnlockedArticles();
  }

  /**
   * Check if an article is unlocked and not expired
   */
  isArticleUnlocked(slug: string): boolean {
    if (!this.isBrowser) return false;

    const stored = this.getStoredUnlockedArticles();
    const article = stored.find((a) => a.slug === slug);

    if (!article) {
      return false;
    }

    // Check if password has expired
    const now = Date.now();
    const elapsed = now - article.unlockedAt;

    if (elapsed > this.PASSWORD_EXPIRATION_MS) {
      // Password expired, remove it
      this.lockArticle(slug);
      return false;
    }

    return true;
  }

  /**
   * Lock an article
   */
  lockArticle(slug: string): void {
    if (!this.isBrowser) return;

    const unlocked = this.unlockedArticles.value;
    unlocked.delete(slug);
    this.unlockedArticles.next(unlocked);
    this.saveUnlockedArticles();
  }

  /**
   * Save unlocked articles to localStorage with timestamps
   */
  private saveUnlockedArticles(): void {
    if (!this.isBrowser) return;

    try {
      const stored = this.getStoredUnlockedArticles();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stored));
    } catch (e) {
      console.error('Failed to save unlocked articles:', e);
    }
  }

  /**
   * Get stored unlocked articles from localStorage
   */
  private getStoredUnlockedArticles(): UnlockedArticle[] {
    if (!this.isBrowser) return [];

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as UnlockedArticle[];
      }
    } catch (e) {
      console.error('Failed to parse unlocked articles:', e);
    }
    return [];
  }

  /**
   * Load unlocked articles from localStorage
   */
  private loadUnlockedArticles(): void {
    if (!this.isBrowser) return;

    try {
      const stored = this.getStoredUnlockedArticles();
      const now = Date.now();
      const valid: UnlockedArticle[] = [];

      // Filter out expired passwords
      stored.forEach((article) => {
        const elapsed = now - article.unlockedAt;
        if (elapsed <= this.PASSWORD_EXPIRATION_MS) {
          valid.push(article);
        }
      });

      // Save back only valid ones
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(valid));

      // Update the set
      const slugs = valid.map((a) => a.slug);
      this.unlockedArticles.next(new Set(slugs));
    } catch (e) {
      console.error('Failed to load unlocked articles:', e);
    }
  }

  /**
   * Clear all unlocked articles
   */
  clearUnlockedArticles(): void {
    if (!this.isBrowser) return;

    this.unlockedArticles.next(new Set());
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear unlocked articles:', e);
    }
  }

  /**
   * Get time remaining for an article (in milliseconds)
   */
  getTimeRemaining(slug: string): number {
    if (!this.isBrowser) return 0;

    const stored = this.getStoredUnlockedArticles();
    const article = stored.find((a) => a.slug === slug);

    if (!article) {
      return 0;
    }

    const elapsed = Date.now() - article.unlockedAt;
    const remaining = this.PASSWORD_EXPIRATION_MS - elapsed;

    return Math.max(0, remaining);
  }

  /**
   * Get formatted time remaining (e.g., "3h 45m")
   */
  getTimeRemainingFormatted(slug: string): string {
    const ms = this.getTimeRemaining(slug);
    if (ms <= 0) return '';

    const hours = Math.floor(ms / (60 * 60 * 1000));
    const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));

    const parts = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);

    return parts.join(' ');
  }
}

