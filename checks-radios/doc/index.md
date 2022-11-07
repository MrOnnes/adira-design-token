# Checks and radios

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Default

```js preview-story
export const defaultCheck = () => html`
  <label class="checkbox"
    >Default Checkbox
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
  </label>
`;
```

### Indeterminate

Indeterminate state checkboxes
In addition to the checked and unchecked states, there is a third state a
checkbox can be in: indeterminate. This is a state in which it's impossible to
say whether the item is toggled on or off. This is set using the HTMLInputElement
object's indeterminate property via JavaScript (it cannot be set using an HTML
attribute) src:[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-indeterminate '<input type="checkbox">'):

```js preview-story
export const indeterminate = () => html`
  <label class="checkbox"
    >Indeterminate Checkbox
    <input type="checkbox" checked="checked" />
    <span class="checkmark indeterminate"></span>
  </label>
`;
```

### Disabled

```js preview-story
export const disabledCheck = () => html`
  <form class="d-grid gap-med">
    <label class="checkbox" disabled
      >Disabled Checkbox
      <input type="checkbox" disabled />
      <span class="checkmark"></span>
    </label>
    <label class="checkbox" disabled
      >Disabled Checkbox
      <input type="checkbox" checked="checked" disabled />
      <span class="checkmark"></span>
    </label>
  </form>
`;
```

## Radio Button

```js preview-story
export const defaultRadio = () => html`
  <div>
    <label class="radio"
      >Option 1<input type="radio" checked="checked" name="radio" />
      <span class="checkmark"></span>
    </label>
    <label class="radio"
      >Option 2<input type="radio" checked="checked" name="radio" />
      <span class="checkmark"></span>
    </label>
  </div>
`;
```

### Disabled

```js preview-story
export const disabledRadio = () => html`
  <div>
    <label class="radio" disabled
      >Option 1<input type="radio" name="radio" disabled />
      <span class="checkmark"></span>
    </label>
    <label class="radio" disabled
      >Option 2<input type="radio" name="radio" disabled />
      <span class="checkmark"></span>
    </label>
  </div>
`;
```

## Switch

```js preview-story
export const defaultSwitch = () => html`
  <div class="d-grid gap-med">
    <label class="switch">
      <input type="checkbox" />
      <span class="toggle">toggle</span>
      Default Switch
    </label>
    <label class="switch">
      <input type="checkbox" checked="checked" />
      <span class="toggle">toggle</span>
      Default Checked Switch
    </label>
    <label class="switch" disabled>
      <input type="checkbox" disabled />
      <span class="toggle">toggle</span>
      Disabled Switch
    </label>
    <label class="switch" disabled>
      <input type="checkbox" checked="checked" disabled />
      <span class="toggle">toggle</span>
      Disabled Checked Switch
    </label>
  </div>
`;
```

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with .form-check.

```js preview-story
export const defaultStack = () => html`
  <div class="d-grid gap-med">
    <label class="checkbox"
      >Default Checkbox
      <input type="checkbox" checked="checked" />
      <span class="checkmark"></span>
    </label>
    <label class="checkbox" disabled
      >Disabled Checkbox
      <input type="checkbox" disabled />
      <span class="checkmark"></span>
    </label>
  </div>
`;
```

## Inline

Group checkboxes or radios on the same horizontal row by adding .form-check-inline to any .form-check.

```js preview-story
export const defaultInline = () => html`
  <div class="form-check-inline">
    <label class="checkbox"
      >Default Checkbox
      <input type="checkbox" checked="checked" />
      <span class="checkmark"></span>
    </label>
    <label class="checkbox" disabled
      >Disabled Checkbox
      <input type="checkbox" disabled />
      <span class="checkmark"></span>
    </label>
  </div>
`;
```
