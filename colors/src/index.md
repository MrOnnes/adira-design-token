# Colors

```js script
import { html } from 'lit';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './styles.css';
import '../../tokens/variables.css';
```

## Background

### Primary Color

```html preview-story
<style>
  :root {
    --figma-color-background-primary: #ffdd00;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-background-primary"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

### Base Color

```html preview-story
<style>
  :root {
    --figma-color-background-base-light: #fcfcfd;
    --figma-color-background-base-grey: #f2f4f7;
    --figma-color-background-base-dark: #101828;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-background-base"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

### Secondary Background Color

```html preview-story
<style>
  :root {
    --figma-color-background-error: #fee4e2;
    --figma-color-background-link: #d1e9ff;
    --figma-color-background-success: #d1fadf;
    --figma-color-background-disable: #f2f4f7;
  }
</style>
<dockit-css-showcases
  css-props-names="--figma-color-background-error,--figma-color-background-link,--figma-color-background-success,--figma-color-background-disable"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

### Button Color

#### Primary

```html preview-story
<style>
  :root {
    --figma-color-background-button-primary-active: #ffdd00;
    --figma-color-background-button-primary-hover: #ffeb74;
    --figma-color-background-button-primary-selected: #f2b705;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-background-button-primary"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

#### Error

```html preview-story
<style>
  :root {
    --figma-color-background-button-error-active: #f04438;
    --figma-color-background-button-error-hover: #fda29b;
    --figma-color-background-button-error-selected: #d92d20;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-background-button-error"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

#### Secondary

```html preview-story
<style>
  :root {
    --figma-color-background-button-secondary-active: #fcfcfd;
    --figma-color-background-button-secondary-hover: #f5faff;
    --figma-color-background-button-secondary-selected: #d1e9ff;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-background-button-secondary"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

### Shadow

```html preview-story
<style>
  :root {
    --figma-color-shadow: #101828;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-shadow"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

### Border

```html preview-story
<style>
  :root {
    --figma-color-border-base: #98a2b3;
    --figma-color-border-error: #f97066;
    --figma-color-border-link: #53b1fd;
    --figma-color-border-success: #32d583;
    --figma-color-border-disable: #98a2b3;
    --figma-color-border-button-link: #b2ddff;
    --figma-color-border-button-error: #f04438;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-border"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```

### Text

```html preview-story
<style>
  :root {
    --figma-color-text-normal: #344054;
    --figma-color-text-white: #fcfcfd;
    --figma-color-text-link: #2e90fa;
    --figma-color-text-success: #027a48;
    --figma-color-text-error: #b42318;
    --figma-color-text-button-primary: #344054;
    --figma-color-text-button-secondary: #175cd3;
    --figma-color-text-sidebar: #344054;
    --figma-color-text-disable: #98a2b3;
  }
</style>
<dockit-css-showcases
  css-props-prefix="--figma-color-text"
  component-class="box"
  style-key="background-color"
></dockit-css-showcases>
```
