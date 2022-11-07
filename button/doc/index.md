# Button

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

## Usage

At this moment, our button component is just a combination of some CSS Custom Properties representing the Design Tokens behind the button.
The other CSS file implements those design tokens onto any element with `.btn` class.

```html
<link rel="stylesheet" href="...." /> <button class="btn btn-primary"></button>
```

### Example

```js preview-story
export const exampleButton = () => html`
  <div class="bd-example">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
  </div>
`;
```

### Size

Fancy larger or smaller buttons? Add <span class="code">.btn-lg</span> or <span class="code">.btn-sm</span> for additional sizes.

```js preview-story
export const sizeButtonLg = () => html`
  <div class="bd-example">
    <button type="button" class="btn btn-primary btn-lg">Primary</button>
    <button type="button" class="btn btn-secondary btn-lg">Secondary</button>
  </div>
`;
```

```js preview-story
export const sizeButtonSm = () => html`
  <div class="bd-example">
    <button type="button" class="btn btn-primary btn-sm">Primary</button>
    <button type="button" class="btn btn-secondary btn-sm">Secondary</button>
  </div>
`;
```

### Disabled

Make buttons look inactive by adding the <span class="code">disabled</span> boolean attribute

```js preview-story
export const disabledButton = () => html`
  <div class="bd-example">
    <button type="button" class="btn btn-primary" disabled>Primary</button>
    <button type="button" class="btn btn-secondary" disabled>Secondary</button>
  </div>
`;
```

### Block Button

Responsive "Block Button". Resize your browser to see them change.

```js preview-story
export const blockButton = () => html`
  <div class="bd-example d-grid gap">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
  </div>
`;
```

```js preview-story
export const blockLeftButton = () => html`
  <div class="bd-example d-grid gap d-md-flex">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
  </div>
`;
```

```js preview-story
export const blockMidButton = () => html`
  <div class="bd-example d-grid gap mx-auto col-6">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
  </div>
`;
```

```js preview-story
export const blockRightButton = () => html`
  <div class="bd-example d-grid gap d-md-flex justify-content-md-end">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
  </div>
`;
```
