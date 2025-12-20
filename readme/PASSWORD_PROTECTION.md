# Password Protection for Articles

## Overview

This feature allows you to password-protect specific articles in your blog. When an article has password protection enabled, readers must enter the correct password to view its content.

**Key Features:**
- ✅ Client-side SHA1 hashing for password verification
- ✅ localStorage-based storage (passwords persist across sessions)
- ✅ Time-based expiration (default: 4 hours)
- ✅ Automatic cleanup of expired passwords
- ✅ Works selectively - only articles with `enableLock: true`
- ✅ Beautiful password modal dialog
- ✅ SSR-safe (no errors on server-side rendering)
- ✅ No disruption to non-protected articles

## Quick Start

### 1. Password Format

Use the default password from environment (`test123` = `cc7cf1502e524e48d45a63e185b96eb1f6ac5f2d`):

```markdown
---
enableLock: true
lockedPassword: cc7cf1502e524e48d45a63e185b96eb1f6ac5f2d
---
```

OR generate your own SHA1 hash:
```bash
echo -n "your_password" | sha1sum
```

### 2. Add to Article Frontmatter

```markdown
---
title: Exclusive Content
slug: exclusive-article
description: This is password protected content
enableLock: true
lockedPassword: cc7cf1502e524e48d45a63e185b96eb1f6ac5f2d
---

# Your Article Title

This content is password protected!
```

### 3. Users Enter Password

When visitors access the article, they see a password prompt. After entering the correct password:
- ✅ Password is verified (SHA1 hash match)
- ✅ Stored in localStorage with timestamp
- ✅ Article content becomes visible
- ✅ Password remembered for 4 hours
- ✅ No need to re-enter during that time

## Configuration

### Change Default Password

Edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  googleFormId: '...',
  // Change this to your SHA1 hash
  defaultProtectionPassword: 'cc7cf1502e524e48d45a63e185b96eb1f6ac5f2d',
  // Change expiration time (in hours)
  passwordExpirationHours: 4,
};
```

### Change Password Expiration

Set `passwordExpirationHours` in environment:

```typescript
passwordExpirationHours: 8,  // Expires after 8 hours
```

## How It Works

### Storage Strategy

- **Where:** Browser's `localStorage`
- **What:** Slug, unlock timestamp
- **Duration:** Until expiration time (4 hours default) or manually cleared
- **Persists:** Across browser restarts in same session

### Expiration Flow

```
User unlocks article at 10:00 AM
    ↓
Stored with timestamp: {slug: "article", unlockedAt: 1703001600000}
    ↓
User closes and reopens browser at 1:00 PM (3 hours later)
    ↓
Password still valid ✅
    ↓
User visits at 2:15 PM (4 hours 15 minutes later)
    ↓
Password expired ❌
    ↓
Show password prompt again
```

### Password Verification

```
User enters password: "test123"
    ↓
Service calculates SHA1: "cc7cf1502e524e48d45a63e185b96eb1f6ac5f2d"
    ↓
Compare with stored hash
    ↓
Match? → Unlock article ✅
No match? → Show error "Incorrect password" ❌
```

## Examples

### Example 1: Using Default Password

```markdown
---
title: Protected Content
slug: protected-article
enableLock: true
lockedPassword: cc7cf1502e524e48d45a63e185b96eb1f6ac5f2d
---

# Password: test123
```

### Example 2: Custom Password

Generate SHA1:
```bash
echo -n "members123" | sha1sum
# 9a53ade93b1b1bc5e20f4f9cd2a2ea29b2a8d3fa
```

Use in article:
```markdown
---
title: Members Only
slug: members-only
enableLock: true
lockedPassword: 9a53ade93b1b1bc5e20f4f9cd2a2ea29b2a8d3fa
---
```

### Example 3: 8-hour Expiration

Update environment first:
```typescript
passwordExpirationHours: 8,
```

Then create article:
```markdown
---
title: Extended Access
slug: extended-article
enableLock: true
lockedPassword: cc7cf1502e524e48d45a63e185b96eb1f6ac5f2d
---
```

## Browser Storage Details

### What's Stored

```json
[
  {
    "slug": "exclusive-article",
    "unlockedAt": 1703001600000
  },
  {
    "slug": "member-content",
    "unlockedAt": 1703002800000
  }
]
```

### How Long

- Stored in `localStorage` as `unlocked_articles_with_time`
- Persists across browser restarts
- Auto-expires based on `passwordExpirationHours`
- Users can clear manually (browser settings → Clear Data)

## Security Notes

⚠️ **Client-side Protection Only:**
- Passwords and hashes visible in HTML source
- Determined users can inspect to find hash
- Suitable for access control, not sensitive data

**Best for:**
- Exclusive member content
- Preview/draft posts
- Paywalled articles
- Course materials
- Beta features

**NOT for:**
- Sensitive personal data
- Passwords or credentials
- Confidential business information
- Healthcare/financial data

## Customization

### Change Password Modal Style

Edit `src/app/components/password-prompt.component.ts` styles:

```typescript
.password-modal {
  // Customize colors, size, animations
}
```

### Change Locked Article Placeholder

Edit `src/app/pages/blog/[slug].page.ts` styles:

```typescript
.locked-article-placeholder {
  // Customize appearance
}
```

### Get Time Remaining

Service provides utility method:

```typescript
// Get milliseconds remaining
const ms = this.passwordService.getTimeRemaining(slug);

// Get formatted string (e.g., "3h 45m")
const formatted = this.passwordService.getTimeRemainingFormatted(slug);
```

## Troubleshooting

### Article still shows password prompt

1. **Verify `enableLock: true`** in frontmatter
2. **Verify SHA1 hash** is correct (40 characters)
3. **Clear localStorage:**
   - Browser Dev Tools → Application → localStorage → remove `unlocked_articles_with_time`
   - Or press F12 → Clear Data

### Password doesn't match

1. **Double-check hash:**
   ```bash
   echo -n "your_password" | sha1sum
   ```
2. **Copy full 40-character hash** (no spaces)
3. **Verify no typos** in frontmatter

### sessionStorage error in console (SSR)

✅ **Fixed in v2.0**
- Service now checks if browser before accessing storage
- Works correctly in both SSR and client-side

### Password expires too quickly/slowly

Update `passwordExpirationHours` in `environment.ts`:

```typescript
// 2 hours
passwordExpirationHours: 2,

// 12 hours  
passwordExpirationHours: 12,
```

## API Reference

### PasswordProtectionService

```typescript
// Verify password
await service.verifyPassword(password: string, hash: string): Promise<boolean>

// Unlock article
service.unlockArticle(slug: string): void

// Check if unlocked
service.isArticleUnlocked(slug: string): boolean

// Lock article
service.lockArticle(slug: string): void

// Get time remaining (milliseconds)
service.getTimeRemaining(slug: string): number

// Get formatted time (e.g., "3h 45m")
service.getTimeRemainingFormatted(slug: string): string

// Clear all
service.clearUnlockedArticles(): void
```

## Updates

### v2.0 (Current)
- ✅ Fixed SSR error with proper browser detection
- ✅ Changed from sessionStorage to localStorage
- ✅ Added time-based expiration
- ✅ Added environment configuration
- ✅ Added utility methods for time remaining
- ✅ Auto-cleanup of expired passwords

### v1.0 (Previous)
- Basic password protection with sessionStorage
- Session-only persistence

## Support

For issues:
1. Check browser console for errors
2. Verify SHA1 hash (40 characters, no spaces)
3. Ensure `enableLock: true` and `lockedPassword: "hash"` in frontmatter
4. Clear localStorage and try again
5. Check `passwordExpirationHours` in environment.ts

---

**Version:** 2.0.0  
**Last Updated:** December 20, 2024  
**Default Password:** test123  
**Default Expiration:** 4 hours

