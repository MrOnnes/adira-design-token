```js script
import { html } from 'lit';
import '~/tokens/variables.css';
import '../src/styles.css';
```

## Input Field

```js preview-story
export const input_field = () => html`
  <form class="input_field">
    <label for="Label">Label</label>
    <div class="content">
      <input type="text" id="id" name="name" placeholder="Placeholder" />
    </div>
  </form>
`;
```

## Checkbox

```js preview-story
export const checkbox = () => html`
  <label class="checkbox"
    >One
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
  </label>

  <label class="checkbox"
    >Two
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
`;
```

## Radio Button

```js preview-story
export const radio = () => html`
  <form>
    <label class="radio">
      <input type="radio" name="radio" />
      <span>Option 1</span>
    </label>
    <label class="radio">
      <input type="radio" name="radio" />
      <span>Option 2</span>
    </label>
  </form>
`;
```

## Toggle

```js preview-story
export const toggle = () => html`
  <div class="switch">
    <input type="checkbox" id="switch" />
    <label id="switch" for="switch">Toggle</label>
    <label>Switch</label>
    <div></div>
  </div>
`;
```
