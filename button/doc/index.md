# Button

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
import '../../tokens/src/script.js';
```

### Example

```html preview-story
<div class="d-flex flex-wrap gap-med">
  <button type="button" class="btn ">Default</button>
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
<div class="d-flex flex-wrap gap-med">
  <button type="button" class="btn ">
    <i class="fa-solid fa-download"></i>Default
  </button>
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

### Button tags

</br>
The <code>.btn</code> classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can also use these classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).

When using button classes on <code>&lt;a&gt;</code> elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a role="button" to appropriately convey their purpose to assistive technologies such as screen readers.

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
  <a class="btn btn-primary" href="#" role="button">Link</a>
  <button class="btn btn-primary" type="submit">Button</button>
  <input class="btn btn-primary" type="button" value="Input" />
  <input class="btn btn-primary" type="submit" value="Submit" />
  <input class="btn btn-primary" type="reset" value="Reset" />
</div>
```

</br>

### Outline buttons

</br>
In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code>.btn-outline-*</code> ones to remove all background images and colors on any button.

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
  <button type="button" class="btn btn-outline-primary">Primary</button>
  <button type="button" class="btn btn-outline-secondary">Secondary</button>
  <button type="button" class="btn btn-outline-success">Success</button>
  <button type="button" class="btn btn-outline-danger">Danger</button>
  <button type="button" class="btn btn-outline-warning">Warning</button>
  <button type="button" class="btn btn-outline-info">Info</button>
  <button type="button" class="btn btn-outline-light">Light</button>
  <button type="button" class="btn btn-outline-dark">Dark</button>
</div>
```

</br>

### Size

</br>
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

Create block level buttons—those that span the full width of a parent—by adding <code>.btn-block</code>.

```html preview-story
<div style="display:flex; flex-wrap: wrap; gap:8px">
  <button type="button" class="btn btn-primary btn-lg btn-block">
    Block level button
  </button>
  <button type="button" class="btn btn-secondary btn-lg btn-block">
    Block level button
  </button>
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
