# Button

This is buttons component

```js script
import { html } from 'lit';
import '~/tokens/variables.css';
import '../src/button.css';
```

```js preview-story
export const primary = () => html`
  <button class="btn-primary typo-button1">Primary</button>
`;
```

```js preview-story
export const secondary = () => html`
  <button class="btn-secondary typo-button2">Secondary</button>
`;
```

```js preview-story
export const textbtn = () => html`
  <button class="btn-text typo-button2">Text</button>
`;
```

```js preview-story
export const input = () => html`
  <form class="input_field">
    <label for="Label">Label</label>
    <div class="content">
      <input type="text" id="id" name="name" placeholder="Placeholder" />
    </div>
  </form>
`;
```
