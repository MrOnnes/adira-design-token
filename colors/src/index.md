# Colors

```js script
import { html } from 'lit';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './styles.css';
import '../../tokens/variables.css';
import '../../tokens/src/styles.css';
```

### Primary Color

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-background-primary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Base Color

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-background-base"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Secondary Background Color

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-names="--figma-color-background-error,--figma-color-background-link,--figma-color-background-success,--figma-color-background-disable"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Button Color

#### Primary

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-background-button-primary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

#### Error

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-background-button-error"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

#### Secondary

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-background-button-secondary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Shadow

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-shadow"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Border

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-border"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Text

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-color-text"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

## Global Color

### Link

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-palette-link"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Success

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-palette-success"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Warning

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-palette-warning"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Error

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-palette-error"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Primary

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-palette-primary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

### Gray

```html story
<div class="preview-box">
  <dockit-css-showcases
    css-props-prefix="--figma-palette-gray"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
</div>
```

## Color Class

```html story-preview
<p class="text-primary">.text-primary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-info bg-dark">.text-info</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black">.text-dark</p>
<p class="text-muted">.text-muted</p>
```
