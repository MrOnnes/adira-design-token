# Cards

Documentation

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

```js preview-story
export const exCards = () => html`
  <div class="cards shadow-md">
      <img  class="placeholder-img" src="https://images.unsplash.com/photo-1668101205453-97cd2ba2bb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80">
      </img>
    
    <div class="card-body">
      <div class="card-title subtitle1">Card Title</div>
      <label class="card-subtitle">Secondary Text</label>
      <p class="card-text caption">Lorem Ipsum sit dolor amet</p>
      <div class="card-action">
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-link"><i class="fa-solid fa-ellipsis-vertical"></i></button>
      </div>
    </div>
  </div>
`;
```

### Without Button

```js preview-story
export const exCardsNoButton = () => html`
  <div class="cards shadow-md">
      <img  class="placeholder-img" src="https://via.placeholder.com/150

C/O https://placeholder.com/#How_To_Use_Our_Placeholders">
      </img>
    
    <div class="card-body">
      <div class="card-title subtitle1">Card Title</div>
      <label class="card-subtitle">Secondary Text</label>
      <p class="card-text caption">Lorem Ipsum sit dolor amet</p>
    </div>
  </div>
`;
```
