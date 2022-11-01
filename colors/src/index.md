# Colors

```js script
import { html } from 'lit';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './styles.css';
import '~/tokens/variables.css';
```

## Core

### Background colors

Background colors of component.

```js story
export const background = () => html`
  <dockit-css-showcases
    css-props-prefix="--figma-color-background"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Text colors

Primary colors of Text.

```js story
export const text = () => html`
  <dockit-css-showcases
    css-props-prefix="--figma-color-text-"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Border colors

Border colors

```js story
export const border = () => html`
  <dockit-css-showcases
    css-props-prefix="--figma-color-border-"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```
