# Button

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
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
```

#### With Icon

use

```
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css);
```

if icon not showing

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
  <button type="button" class="btn btn-primary">
    <i class="fa-solid fa-download"></i>Primary
  </button>
  <button type="button" class="btn btn-secondary">
    <i class="fa-solid fa-download"></i>Secondary
  </button>
  <button type="button" class="btn btn-success">
    <i class="fa-solid fa-download"></i>Success
  </button>
  <button type="button" class="btn btn-danger">
    <i class="fa-solid fa-download"></i>Danger
  </button>
  <button type="button" class="btn btn-warning">
    <i class="fa-solid fa-download"></i>Warning
  </button>
  <button type="button" class="btn btn-info">
    <i class="fa-solid fa-download"></i>Info
  </button>
  <button type="button" class="btn btn-light">
    <i class="fa-solid fa-download"></i>Light
  </button>
  <button type="button" class="btn btn-dark">
    <i class="fa-solid fa-download"></i>Dark
  </button>
  <button type="button" class="btn btn-link">
    <i class="fa-solid fa-download"></i>Link
  </button>
</div>
```

### Size

Fancy larger or smaller buttons? Add <span style="color:red">.btn-lg</span> or <span style="color:red">.btn-sm</span> for additional sizes.

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
  <button type="button" class="btn btn-primary btn-lg">Primary</button>
  <button type="button" class="btn btn-secondary btn-lg">Secondary</button>
</div>
```

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
  <button type="button" class="btn btn-primary btn-sm">Primary</button>
  <button type="button" class="btn btn-secondary btn-sm">Secondary</button>
</div>
```

### Disabled

Make buttons look inactive by adding the <span class="code">disabled</span> boolean attribute

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-secondary" disabled>Secondary</button>
</div>
```

### Button Group

Responsive "Block Button". Resize your browser to see them change.

```html preview-story
<div class="d-grid  gap-med">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
</div>
```

```html preview-story
<div class="d-grid  gap-med d-md-flex">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
</div>
```

```html preview-story
<div class="d-grid gap-med mx-auto col-6">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
</div>
```

```html preview-story
<div class="d-grid gap-med d-md-flex justify-content-md-end">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
</div>
```
