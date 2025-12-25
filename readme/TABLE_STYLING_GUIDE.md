# Markdown Table Styling Guide

## Overview

All markdown tables in your blog posts are now automatically styled with visible borders, headers, and row highlighting. The tables are fully responsive and include dark mode support.

## Basic Usage

Simply write standard markdown tables in your posts:

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

This will render as a styled table with:
- Visible borders on all cells
- Gray header background
- Row hover effects
- Responsive scrolling on mobile

## Features

### 1. Automatic Styling
- ✅ Visible borders on all rows and columns
- ✅ Gray background for table headers
- ✅ Hover effect on rows for better readability
- ✅ Rounded corners and subtle shadow
- ✅ Proper padding for comfortable reading

### 2. Text Alignment

Use standard markdown alignment syntax:

```markdown
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left         | Center         | Right         |
| Text         | Text           | 123           |
```

- `:---` = Left aligned (default)
- `:---:` = Center aligned
- `---:` = Right aligned

### 3. Responsive Design

Tables automatically scroll horizontally on small screens while maintaining readability.

### 4. Dark Mode Support

Tables automatically adapt to dark mode with:
- Dark backgrounds
- Light text colors
- Appropriate border colors
- Maintained contrast ratios

## Examples

### Example 1: Feature Comparison

```markdown
| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Storage | 10 GB | 100 GB | Unlimited |
| Users | 1 | 10 | Unlimited |
| Support | Email | Priority | 24/7 |
| API Access | ✗ | ✓ | ✓ |
```

### Example 2: Status Table

```markdown
| Task | Status | Priority | Due Date |
|------|--------|----------|----------|
| Design mockups | ::color[green]{✓ Complete} | High | 2023-12-01 |
| Development | ::color[orange]{⚠ In Progress} | High | 2023-12-15 |
| Testing | ::color[red]{✗ Not Started} | Medium | 2023-12-20 |
```

### Example 3: Pricing Table

```markdown
| Plan | Price | Features |
|:----:|------:|----------|
| Starter | $9/mo | Basic features |
| Pro | $29/mo | All features + Support |
| Enterprise | Custom | Everything + SLA |
```

### Example 4: Data Table

```markdown
| Name | Role | Department | Email |
|------|------|------------|-------|
| John Doe | Developer | Engineering | john@example.com |
| Jane Smith | Designer | Product | jane@example.com |
| Bob Johnson | Manager | Operations | bob@example.com |
```

## Advanced Usage

### Combining with Text Formatting

You can use text formatting inside table cells:

```markdown
| Feature | Status |
|---------|--------|
| Dark Mode | ::color[green]{✓ Available} |
| Mobile App | ::color[orange]{⚠ Beta} |
| API | ::color[red]{✗ Coming Soon} |
```

### Code in Tables

```markdown
| Function | Syntax | Description |
|----------|--------|-------------|
| Print | `console.log()` | Output to console |
| Alert | `alert()` | Show popup |
| Wait | `setTimeout()` | Delay execution |
```

### Links in Tables

```markdown
| Resource | Link | Type |
|----------|------|------|
| Documentation | [Docs](https://example.com) | Guide |
| API Reference | [API](https://api.example.com) | Reference |
```

## Styling Details

### Default Styles

- **Border**: 1px solid gray
- **Header Background**: Light gray (#f8f9fa)
- **Header Text**: Bold, dark gray
- **Cell Padding**: 0.75rem (top/bottom) × 1rem (left/right)
- **Hover Effect**: Light gray background on row hover
- **Shadow**: Subtle box shadow for depth

### Responsive Breakpoints

- **Desktop (>768px)**: Full table display
- **Mobile (≤768px)**: Horizontal scroll, reduced padding

### Dark Mode Colors

- **Background**: Dark gray (#1a1a1a)
- **Header**: Darker gray (#2d2d2d)
- **Borders**: Medium gray (#444)
- **Text**: Light gray (#adb5bd)
- **Hover**: Slightly lighter gray (#333)

## Table Variants (Optional)

If you need different table styles, you can add custom classes via HTML:

### Compact Table
```html
<table class="compact">
<!-- markdown table here -->
</table>
```

### Bordered Table (all borders)
```html
<table class="bordered">
<!-- markdown table here -->
</table>
```

### Borderless Table
```html
<table class="borderless">
<!-- markdown table here -->
</table>
```

## Best Practices

### ✓ Do's

1. **Keep tables simple**: Avoid too many columns (max 5-6 for readability)
2. **Use headers**: Always include a header row
3. **Align appropriately**: Numbers right, text left, labels center
4. **Keep content concise**: Use short, clear cell content
5. **Use formatting**: Add colors for status indicators

### ✗ Don'ts

1. **Don't overcrowd**: Too much data makes tables hard to read
2. **Don't skip headers**: Headers provide context
3. **Don't use for layout**: Tables are for tabular data only
4. **Don't nest tables**: Avoid putting tables inside tables
5. **Don't make them too wide**: Consider mobile users

## Mobile Considerations

- Tables automatically scroll horizontally on mobile
- Keep important information in left columns
- Consider splitting large tables into multiple smaller ones
- Test on mobile devices to ensure readability

## Accessibility

- Tables use proper semantic HTML (`<thead>`, `<tbody>`, `<th>`, `<td>`)
- Headers are properly marked for screen readers
- Sufficient color contrast in both light and dark modes
- Hover effects provide visual feedback

## Troubleshooting

### Borders Not Showing

If borders aren't visible:
1. Clear browser cache
2. Check that `tables.css` is imported in `styles.css`
3. Verify the table is inside `.blog-post__content`

### Formatting Not Applied

Make sure you're using standard markdown table syntax:
- Pipes (`|`) to separate columns
- Header separator row with dashes
- Consistent column alignment

### Table Too Wide on Mobile

- Reduce number of columns
- Use shorter header/cell text
- Consider alternative layouts for mobile

## Examples in Action

See these blog posts for live table examples:
- [Text Formatting Showcase](../src/content/2023-12-24-text-formatting-showcase.md) - Feature comparison tables
- [Text Formatting Test](../src/content/2023-12-25-text-formatting-test.md) - Simple examples

## Summary

Your markdown tables now have:
- ✅ Visible borders and grid structure
- ✅ Professional styling with headers
- ✅ Interactive hover effects
- ✅ Responsive mobile support
- ✅ Dark mode compatibility
- ✅ Accessibility features

Simply write standard markdown tables, and they'll automatically be beautifully styled! 📊
