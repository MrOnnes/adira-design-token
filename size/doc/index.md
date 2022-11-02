```js script
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
```

# token-css-showcases

Component to visualize different design tokens implemented as CSS custom properties.

## Setup

```js
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
```

## Demos

We need the following styles for the demos below:

```html preview-story
<p>Check the styles code 👇</p>
<style>
  .box {
    width: 6rem;
    height: 6rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    background-color: #ffcc00;
    border-radius: 0.2rem;
  }

  .wide {
    width: 10rem;
  }

  .white {
    background-color: #ffffff;
  }
</style>
```

### Border-radius

```html preview-story
<style>
  :root {
    --figma-size-radius-extra-small: 4px;
    --figma-size-radius-small: 8px;
    --figma-size-radius-medium: 12px;
    --figma-size-radius-large: 16px;
    --figma-size-radius-extra-large: 28px;
    --figma-size-radius-full: 100px;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-size-radius"
  component-class="box wide"
  style-key="border-radius"
></dockit-css-showcases>
```

### Shadow (Coming soon)

```html preview-story
<style>
  :root {
    --shadow-x-small: 0 1px 0 #0d131e0d;
    --shadow-small: 0 1px 2px #0d131e1a;
    --shadow-medium: 0 2px 4px #0d131e1a;
    --shadow-large: 0 2px 8px #0d131e1a;
    --shadow-x-large: 0 4px 16px #0d131e1a;
    --shadow-outline: 0 0 0 3px #4299e14c;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--shadow"
  component-class="box white"
  style-key="box-shadow"
></dockit-css-showcases>
```

### Letter-spacing (Coming soon)

```html preview-story
<style>
  :root {
    --letter-spacing-dense: -0.075em;
    --letter-spacing-normal: normal;
    --letter-spacing-loose: 0.075em;
    --letter-spacing-percentage: 5%;
    --letter-spacing-num: 20;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--letter-spacing"
  component-type="text"
  style-key="letter-spacing"
></dockit-css-showcases>
```

### Line-height

```html preview-story
<style>
  :root {
    --figma-size-line-height-h1: 38px;
    --figma-size-line-height-h2: 32px;
    --figma-size-line-height-h3: 30px;
    --figma-size-line-height-h4: 28px;
    --figma-size-line-height-h5: 24px;
    --figma-size-line-height-subtitle1: 24px;
    --figma-size-line-height-subtitle2: 20px;
    --figma-size-line-height-body1: 24px;
    --figma-size-line-height-body2: 20px;
    --figma-size-line-height-button1: 24px;
    --figma-size-line-height-button2: 20px;
    --figma-size-line-height-label: 18px;
    --figma-size-line-height-caption: 18px;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-size-line-height"
  component-type="text"
  style-key="line-height"
  long-text
></dockit-css-showcases>
```

### Font-weight

```html preview-story
<style>
  :root {
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-semibold: 500;
    --font-weight-bold: 700;
    --figma-font-weight-regular: 400;
    --figma-font-weight-medium: 500;
    --figma-font-weight-semibold: 600;
    --figma-font-weight-bold: 700;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-font-weight"
  component-type="text"
  style-key="font-weight"
></dockit-css-showcases>
```

### Font-size

```html preview-story
<style>
  :root {
    --figma-size-font-heading-1: 30px;
    --figma-size-font-heading-2: 24px;
    --figma-size-font-heading-3: 20px;
    --figma-size-font-heading-4: 18px;
    --figma-size-font-heading-5: 16px;
    --figma-size-font-body-1: 16px;
    --figma-size-font-body-2: 14px;
    --figma-size-font-subtitle-1: 16px;
    --figma-size-font-subtitle-2: 14px;
    --figma-size-font-button-1: 12px;
    --figma-size-font-button-2: 14px;
    --figma-size-font-label: 12px;
    --figma-size-font-caption: 12px;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-size-font"
  component-type="text"
  style-key="font-size"
></dockit-css-showcases>
```

### Font-family (Coming Soon)

```html preview-story
<style>
  :root {
    --font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --font-family-serif: Georgia, 'Times New Roman', serif;
    --font-family-mono: Menlo, Monaco, 'Courier New', monospace;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--font-family"
  component-type="text"
  style-key="font-family"
></dockit-css-showcases>
```

### Z-index (Coming Soon)

With a standard prefix:

```html preview-story
<style>
  :root {
    --z-index-drawer: 700;
    --z-index-dialog: 800;
    --z-index-dropdown: 900;
    --z-index-toast: 950;
    --z-index-tooltip: 1000;
  }
</style>
<dockit-css-showcases css-props-prefix="--z-index"></dockit-css-showcases>
```

With a custom prefix and explicit mode:

```html preview-story
<style>
  :root {
    --layer-drawer: 700;
    --layer-dialog: 800;
    --layer-dropdown: 900;
    --layer-toast: 950;
    --layer-tooltip: 1000;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--layer"
  mode="z-index"
></dockit-css-showcases>
```

### Spacing

With a standard prefix:

```html preview-story
<style>
  :root {
    --figma-size-space-4: 4px;
    --figma-size-space-8: 8px;
    --figma-size-space-12: 12px;
    --figma-size-space-16: 16px;
    --figma-size-space-20: 20px;
    --figma-size-space-24: 24px;
    --figma-size-space-32: 32px;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-size-space"
  mode="scale"
></dockit-css-showcases>
```
