# Cards

cards provide a flexible and extensible content container with multiple variants and options.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

```html preview-story
<div class="cards shadow-md">
  <img
    class="placeholder-img"
    src="https://images.unsplash.com/photo-1668101205453-97cd2ba2bb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
  />

  <div class="card-body">
    <div class="card-title subtitle1">Card Title</div>
    <label class="card-subtitle">Secondary Text</label>
    <p class="card-text caption">Lorem Ipsum sit dolor amet</p>
    <div class="card-action">
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-link">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </div>
  </div>
</div>
```

### Without Button

```html preview-story
<div class="cards shadow-md">
  <img
    class="placeholder-img"
    src="https://via.placeholder.com/150C/O https://placeholder.com/#How_To_Use_Our_Placeholders"
  />

  <div class="card-body">
    <div class="card-title subtitle1">Card Title</div>
    <label class="card-subtitle">Secondary Text</label>
    <p class="card-text caption">Lorem Ipsum sit dolor amet</p>
  </div>
</div>
```
