```js script
import './styles.css';
import '../../tokens/src/styles.css';
```

# Size and spacing

Size and spacing values help to create consistent interfaces by clearly defining relationships between components.

### Border-radius

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-size-radius"
    component-class="box wide"
    style-key="border-radius"
  ></dockit-css-showcases>
</div>
```

### Letter-spacing

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-names="--figma-font-h1-letter-spacing,--figma-font-h2-letter-spacing,--figma-font-h3-letter-spacing--figma-font-h4-letter-spacing--figma-font-h5-letter-spacing,--figma-font-subtitle1-letter-spacing,--figma-font-subtitle2-letter-spacing,--figma-font-body1-letter-spacing,--figma-font-body2-letter-spacing,--figma-font-button1-letter-spacing,--figma-font-button2-letter-spacing,--figma-font-label-letter-spacing,--figma-font-caption-letter-spacing"
    css-props-names="--color-white,"
    component-type="text"
    style-key="letter-spacing"
  ></dockit-css-showcases>
</div>
```

### Line-height

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-size-line-height"
    component-type="text"
    style-key="line-height"
    long-text
  ></dockit-css-showcases>
</div>
```

### Font-weight

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-font-weight"
    component-type="text"
    style-key="font-weight"
  ></dockit-css-showcases>
</div>
```

### Font-size

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-size-font"
    component-type="text"
    style-key="font-size"
  ></dockit-css-showcases>
</div>
```

### Font-family

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-font-family"
    component-type="text"
    style-key="font-family"
  ></dockit-css-showcases>
</div>
```

### Spacing

With a standard prefix:

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-size-space"
    mode="scale"
  ></dockit-css-showcases>
</div>
```
