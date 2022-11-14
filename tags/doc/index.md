# Tags

Documentation

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

```js preview-story
export const exTags = () => html`
  <div class="bd-example d-flex gap-med">
    <label class="tags">Label</label>
    <label class="tags tag-primary">Label</label>
    <label class="tags tag-success">Label</label>
    <label class="tags tag-warning">Label</label>
    <label class="tags tag-error">Label</label>
    <label class="tags tag-confirmed">Label</label>
  </div>
`;
```

### Example

```js preview-story
export const exTagsIcon = () => html`
  <div class="bd-example d-flex gap-med">
    <label class="tags"> <i class="fa-solid fa-check"></i>Label</label>
    <label class="tags tag-primary"
      ><i class="fa-solid fa-check"></i>Label</label
    >
    <label class="tags tag-success">
      <i class="fa-solid fa-check"></i>Label</label
    >
    <label class="tags tag-warning">
      <i class="fa-solid fa-check"></i>Label</label
    >
    <label class="tags tag-error">
      <i class="fa-solid fa-check"></i>Label</label
    >
    <label class="tags tag-confirmed">
      <i class="fa-solid fa-check"></i>Label</label
    >
  </div>
`;
```
