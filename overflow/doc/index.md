# Overflow

Use these shorthand utilities for quickly configuring how content overflows an element.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

Adjust the <span style="color:red">overflow</span> property on the fly with four default values and classes. These classes are not responsive by default.

```html preview-story
<div class="d-flex gap-med">
  <div
    class="overflow-auto p-3 mb-3   bg-light"
    style="max-width: 260px; max-height: 100px; background: #d3d3d3;"
  >
    This is an example of using
    <span style="color:red">.overflow-auto</span> on an element with set width
    and height dimensions. By design, this content will vertically scroll.
  </div>
  <div
    class="overflow-hidden p-3 mb-3   bg-light"
    style="max-width: 260px; max-height: 100px; background: #d3d3d3;"
  >
    This is an example of using
    <span style="color:red">.overflow-hidden</span> on an element with set width
    and height dimensions. By design, this content will vertically scroll.
  </div>
  <div
    class="overflow-visible p-3 mb-3   bg-light"
    style="max-width: 260px; max-height: 100px; background: #d3d3d3;"
  >
    This is an example of using
    <span style="color:red">.overflow-visible</span> on an element with set
    width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div
    class="overflow-scroll p-3 bg-light"
    style="max-width: 260px; max-height: 100px; background: #d3d3d3;"
  >
    This is an example of using
    <span style="color:red">.overflow-scroll</span> on an element with set width
    and height dimensions. By design, this content will vertically scroll.
  </div>
</div>
```
