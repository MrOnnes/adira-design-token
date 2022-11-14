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

Custom `<select>` menus need only a custom class, .form-select to trigger the custom styles. Custom styles are limited to the `<select>`’s initial appearance and cannot modify the `<option>`s due to browser limitations.

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

You may also choose from small and large custom selects to match our similarly sized text inputs.

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

Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.

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
