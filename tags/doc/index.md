# Tags

Chips help people enter information, make selections, filter content, or trigger actions.
Use <span style="color:red">.tags</span> and <span style="color:red">.tag-x</span>

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

```html preview-story
<div class=" d-flex gap-med flex-wrap">
  <a class="tags">Tags</a>
  <a class="tags tag-primary">Tags</a>
  <a class="tags tag-success">Tags</a>
  <a class="tags tag-warning">Tags</a>
  <a class="tags tag-error">Tags</a>
  <a class="tags tag-confirmed">Tags</a>
</div>
```

```html preview-story
<div class=" d-flex gap-med flex-wrap">
  <a class="tags"> <i class="fa-solid fa-check"></i>Tags</a>
  <a class="tags tag-primary"><i class="fa-solid fa-check"></i>Tags</a>
  <a class="tags tag-success"><i class="fa-solid fa-check"></i>Tags</a>
  <a class="tags tag-warning"><i class="fa-solid fa-check"></i>Tags</a>
  <a class="tags tag-error"> <i class="fa-solid fa-check"></i>Tags</a>
  <a class="tags tag-confirmed"><i class="fa-solid fa-check"></i>Tags</a>
</div>
```

## Clickable tags

```html preview-story
<div class=" d-flex gap-med flex-wrap">
  <a href="#" class="tags"><i class="fa-solid fa-check"></i>Tags</a>
  <a href="#" class="tags tag-primary">
    <i class="fa-solid fa-check"></i>Tags
  </a>
  <a href="#" class="tags tag-success">
    <i class="fa-solid fa-check"></i>Tags
  </a>
  <a href="#" class="tags tag-warning">
    <i class="fa-solid fa-check"></i>Tags
  </a>
  <a href="#" class="tags tag-error"><i class="fa-solid fa-check"></i>Tags</a>
  <a href="#" class="tags tag-confirmed">
    <i class="fa-solid fa-check"></i>Tags
  </a>
</div>
```

### Example

```html preview-story
<div class=" d-flex gap-med flex-wrap">
  <a class="tags tag-success"
    ><i class="fa-solid fa-check"></i>Approved</a
  >
  <a class="tags tag-error"
    >Error<i class="fa-solid fa-circle-xmark"></i
  ></a>
  <a class="tags">
    username@email.com<i class="fa-solid fa-circle-xmark"></i>
  </a>
  <a class="tags">
    <i class="fa-solid fa-calendar"></i>Date</i>
  </a>
</div>
```
