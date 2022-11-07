# Select

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

Customize the native

```
<select>
```

with custom CSS that changes the element’s initial appearance

### Default

```js preview-story
export const defaultSelectLabel = () => html`
  <div>
    <label>label name</label>
    <select class="form-select" aria-label="default dropdown example">
      <option selected>Open this dropdown menu</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
`;
```

Without Label :

```js preview-story
export const defaultSelect = () => html`
  <select class="form-select" aria-label="default dropdown example">
    <option selected>Open this dropdown menu</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
`;
```

### Sizing

```js preview-story
export const selectSize = () => html`
  <div class="bd-example gap-med">
    <select
      class="form-select form-select-lg"
      aria-label="default dropdown example"
    >
      <option selected>Open this dropdown menu</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>

    <select
      class="form-select form-select-sm"
      aria-label="default dropdown example"
    >
      <option selected>Open this dropdown menu</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
`;
```

### Disabled

```js preview-story
export const selectDisabled = () => html`
  <select class="form-select" aria-label="disabled" disabled>
    <option selected>Open this dropdown menu</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
`;
```
