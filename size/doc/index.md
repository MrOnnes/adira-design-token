```js script
import './styles.css';
```

# token-css-showcases

Component to visualize different design tokens implemented as CSS custom properties.

## Setup

```js
--coming soon--
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

### Letter-spacing

```html preview-story
<style>
  :root {
    --figma-font-h1-letter-spacing: 0%;
    --figma-font-h2-letter-spacing: 0%;
    --figma-font-h3-letter-spacing: 0%;
    --figma-font-h4-letter-spacing: 0%;
    --figma-font-h5-letter-spacing: 0%;
    --figma-font-subitle1-letter-spacing: 0%;
    --figma-font-subitle2-letter-spacing: 0%;
    --figma-font-body1-letter-spacing: 0%;
    --figma-font-body2-letter-spacing: 0%;
    --figma-font-button1-letter-spacing: 0%;
    --figma-font-button2-letter-spacing: 0%;
    --figma-font-label-letter-spacing: 0%;
    --figma-font-caption-letter-spacing: 0%;
  }
</style>
<dockit-css-showcases
  css-props-names="--figma-font-h1-letter-spacing,--figma-font-h2-letter-spacing,--figma-font-h3-letter-spacing--figma-font-h4-letter-spacing--figma-font-h5-letter-spacing,--figma-font-subtitle1-letter-spacing,--figma-font-subtitle2-letter-spacing,--figma-font-body1-letter-spacing,--figma-font-body2-letter-spacing,--figma-font-button1-letter-spacing,--figma-font-button2-letter-spacing,--figma-font-label-letter-spacing,--figma-font-caption-letter-spacing"
  css-props-names="--color-white,"
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

### Font-family

```html preview-story
<style>
  :root {
    --figma-font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Inter, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-font-family"
  component-type="text"
  style-key="font-family"
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
