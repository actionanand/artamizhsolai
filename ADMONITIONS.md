# Admonitions/Callouts Guide

Your blog supports admonitions (also known as callouts or alerts) in markdown. These are styled boxes used to highlight important information.

## Syntax

The basic syntax is:
```
:::type
Your content here
:::
```

## Types Available

- **:::tip** - Tips and helpful hints (blue background)
- **:::info** - Information callouts (blue background)
- **:::warning** - Warnings (yellow background)
- **:::danger** - Critical warnings (red background)
- **:::caution** - Cautions (light red background)
- **:::note** - General notes (gray background)
- **:::success** - Success messages (green background)
- **:::collapse** - Collapsible/expandable content (purple background)

## Examples

### Basic Tip
```
:::tip
This is a helpful tip for readers.
:::
```

### With Custom Title
```
:::warning[Important]
This is an important warning message.
:::
```

### Collapsible Content
```
:::collapse[Click to expand]
This content is hidden by default and can be clicked to show/hide.
:::
```

### Multiple Paragraphs
```
:::danger
First paragraph of the danger message.

Second paragraph with more details.
:::
```

## Markdown Inside Admonitions

Currently, basic text formatting is supported. For advanced formatting, you can use HTML entities and basic markdown syntax.

## Notes

- Each admonition must start with `:::type` and end with `:::`
- The opening and closing `:::` must be on their own lines
- Custom titles are optional and go in square brackets after the type
- Admonitions with `:::collapse` are interactive and can be expanded/collapsed by clicking
