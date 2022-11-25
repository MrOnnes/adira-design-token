# Tags

Chips help people enter information, make selections, filter content, or trigger actions.
Use <span style="color:red">.tags</span> and <span style="color:red">.tag-x</span>

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

```html preview-story
<div class=" d-flex gap-med flex-wrap">
  <label class="tags">Label</label>
  <label class="tags tag-primary">Label</label>
  <label class="tags tag-success">Label</label>
  <label class="tags tag-warning">Label</label>
  <label class="tags tag-error">Label</label>
  <label class="tags tag-confirmed">Label</label>
</div>
```

```html preview-story
<div class=" d-flex gap-med flex-wrap">
  <label class="tags"> <i class="fa-solid fa-check"></i>Label</label>
  <label class="tags tag-primary"><i class="fa-solid fa-check"></i>Label</label>
  <label class="tags tag-success"><i class="fa-solid fa-check"></i>Label</label>
  <label class="tags tag-warning"><i class="fa-solid fa-check"></i>Label</label>
  <label class="tags tag-error"> <i class="fa-solid fa-check"></i>Label</label>
  <label class="tags tag-confirmed"
    ><i class="fa-solid fa-check"></i>Label</label
  >
</div>
```

### Example

```html preview-story
<div class=" d-flex gap-med flex-wrap">
  <label class="tags tag-success"
    ><i class="fa-solid fa-check"></i>Approved</label
  >
  <label class="tags tag-error"
    >Error<i class="fa-solid fa-circle-xmark"></i
  ></label>
  <label class="tags"
    >username@email.com<i class="fa-solid fa-circle-xmark"></i
  ></label>
  <label class="tags"><i class="fa-solid fa-calendar"></i>Date</label>
</div>
```
