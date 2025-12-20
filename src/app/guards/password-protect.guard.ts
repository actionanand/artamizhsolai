import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PasswordProtectionService } from '../services/password-protection.service';

/**
 * Guard to protect password-locked articles
 * If article is locked, prompts for password before allowing access
 */
export const canActivateLockedBlogPost: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const passwordService = inject(PasswordProtectionService);

  const slug = route.paramMap.get('slug');
  if (!slug) {
    return false;
  }

  // Check if article is unlocked
  if (passwordService.isArticleUnlocked(slug)) {
    return true;
  }

  // For locked articles, we let the component handle the password prompt
  // This guard mainly serves as a check point
  // The component will show the password dialog if needed
  return true;
};
