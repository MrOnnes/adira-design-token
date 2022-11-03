# Button

This is buttons component

```js script
import { html } from 'lit';
import '~/tokens/variables.css';
import '../src/button.css';
```

Button CSS-only component

## Usage

At this moment, our button component is just a combination of some CSS Custom Properties representing the Design Tokens behind the button.
The other CSS file implements those design tokens onto any element with `.btn` class.

```html
<link rel="stylesheet" href="...." />
<button class="btn" [button type]></button>
```

### Primary

```js preview-story
export const primary = () => html`
  <button class="btn typo-button1">Primary</button>
`;
```

### Error

```js preview-story
export const error = () => html`
  <button class="btn typo-button1" error>Primary</button>
`;
```

### Secondary

```js preview-story
export const secondary = () => html`
  <button class="btn typo-button2" secondary>Secondary</button>
`;
```

### Secondary-error

```js preview-story
export const secondaryError = () => html`
  <button class="btn typo-button2" secondary-error>Secondary</button>
`;
```

### text

```js preview-story
export const textbtn = () => html`
  <button class="btn typo-button2" text>Text</button>
`;
```

### text-error

```js preview-story
export const textErrorBtn = () => html`
  <button class="btn typo-button2" text-error>Text</button>
`;
```
