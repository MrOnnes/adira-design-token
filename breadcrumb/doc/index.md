# Breadcrumb

Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles as desired.

```js preview-story
export const exCrumb = () => html`
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">Home</li>
    </ol>
  </nav>

  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active">First Menu</li>
    </ol>
  </nav>

  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">First Menu</a></li>
      <li class="breadcrumb-item active">Second Menu</li>
    </ol>
  </nav>
`;
```

### Dividers

Dividers are automatically added in CSS through ::before and content. They can be changed by modifying a local CSS custom property --adr-breadcrumb-divider,

```js preview-story
export const exCrumbDivider = () => html`
  <nav style="--adr-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
`;
```
