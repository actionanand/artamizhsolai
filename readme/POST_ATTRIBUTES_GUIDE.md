# Post Attributes Documentation

## Required Fields
- **title** (string): The title of the article
- **slug** (string): URL-friendly unique identifier for the post
- **description** (string): Short description shown in listings
- **coverImage** (string): URL of the cover image

## Optional Fields

### Basic Metadata
- **date** (string): Publication date in any format
- **category** (string): Post category for filtering
- **tags** (string[]): Array of tags for categorization

### Content Features
- **toc** (boolean): Show table of contents (default: true)
- **disclaimerEnabled** (boolean): Show disclaimer section (default: true)
- **disclaimerText** (string): Custom disclaimer text

### Related Content
- **relatedPosts** (string[]): Array of related post slugs (max 5)

### Post Status
- **isPinned** (boolean): Pin post to top of listings
- **isDraft** (boolean): Mark as draft (hidden in production, visible in dev)

### Article Metadata (for Epics, Tamil Literature, etc.)
- **author** (string): Author name
- **epicName** (string): Name of the epic or literary work
- **verseNumber** (string): Verse or chapter number
- **articleMetadata** (string): Additional metadata or information

## Example Post with All Fields

```yaml
---
title: "Silappatikaram - Book I: The Ankle Bracelet"
slug: "silappatikaram-book-1"
description: "An exploration of the first book of Silappatikaram, one of the Five Great Epics of Tamil literature."
coverImage: "https://example.com/silappatikaram.jpg"
date: "December 18, 2024"
category: "Tamil Literature"
tags: ["Epic", "Silappatikaram", "Ancient Tamil", "Poetry"]
author: "Ilango Adigal"
epicName: "Silappatikaram"
verseNumber: "I (Book I)"
articleMetadata: "Written during the Sangam period, composed in Tamil with 5,730 lines"
toc: true
disclaimerEnabled: true
disclaimerText: "The interpretations presented here are scholarly perspectives."
relatedPosts: ["tamil-literature-overview", "other-epic-post"]
isPinned: false
isDraft: false
---

# Content starts here...
```

```yaml
---
title: CSS Grid Mastery
slug: 2023-03-10-css-grid-mastery
description: Master CSS Grid layout system with practical examples
date: March 10, 2023
category: CSS & Design
tags:
  - CSS
  - Design
  - Layout
---
```

## Visibility Rules
- **Draft Posts**: Shown with "📝 Draft" badge in development mode, hidden in production builds
- **Pinned Posts**: Shown with "📌 Pinned" badge and appear at the top of listings
- **Article Metadata**: Displayed in a highlighted section if any fields are present

## Usage Notes
- Article metadata fields are optional and particularly useful for literary and epic content
- Multiple posts can share the same epicName but have different verseNumbers
- Use `articleMetadata` for any additional information that doesn't fit the other fields
- All optional fields can be omitted without affecting post display
