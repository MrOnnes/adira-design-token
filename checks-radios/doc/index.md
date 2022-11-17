# Checks and radios

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Default

eplaced with the help of .checkbox, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.Browser default checkboxes and radios are r

```html preview-story
<label class="checkbox">
  Default Checkbox
  <input type="checkbox" checked="checked" />
  <span class="checkmark"></span>
</label>
```

### Indeterminate

Indeterminate state checkboxes
In addition to the checked and unchecked states, there is a third state a
checkbox can be in: indeterminate. This is a state in which it's impossible to
say whether the item is toggled on or off. This is set using the HTMLInputElement
object's indeterminate property via JavaScript (it cannot be set using an HTML
attribute) src:[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-indeterminate '<input type="checkbox">'):

```html preview-story
<label class="checkbox">
  Indeterminate Checkbox
  <input type="checkbox" checked="checked" />
  <span class="checkmark indeterminate"></span>
</label>
```

### Disabled

Add the disabled attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input’s state.

```html preview-story
<form class="d-grid gap-med">
  <label class="checkbox" disabled>
    Disabled Checkbox
    <input type="checkbox" class="checkbox" disabled />
    <span class="checkmark"></span>
  </label>
  <label class="checkbox" disabled>
    Disabled Checkbox
    <input type="checkbox" checked="checked" disabled />
    <span class="checkmark"></span>
  </label>
</form>
```

## Radio Button

```html preview-story
<div>
  <label class="radio">
    Option 1<input type="radio" checked="checked" name="radio" />
    <span class="checkmark"></span>
  </label>
  <label class="radio">
    Option 2<input type="radio" checked="checked" name="radio" />
    <span class="checkmark"></span>
  </label>
</div>
```

### Disabled

Add the disabled attribute and the associated `<label>` s are automatically styled to match with a lighter color to help indicate the input’s state.

```html preview-story
<div>
  <label class="radio" disabled>
    Option 1<input type="radio" name="radio" disabled />
    <span class="checkmark"></span>
  </label>
  <label class="radio" disabled>
    Option 2<input type="radio" name="radio" disabled />
    <span class="checkmark"></span>
  </label>
</div>
```

## Switch

```html preview-story
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
```

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with <span style="color:red">.form-check</span>.

```html preview-story
<div class="d-grid gap-med">
  <label class="checkbox">
    Default Checkbox
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
  </label>
  <label class="checkbox" disabled>
    Disabled Checkbox
    <input type="checkbox" disabled />
    <span class="checkmark"></span>
  </label>
</div>
```

## Inline

Group checkboxes or radios on the same horizontal row by adding <span style="color:red">.form-check-inline</span> to any <span style="color:red">.form-check</span>.

```html preview-story
<div class="form-check-inline">
  <label class="checkbox">
    Default Checkbox
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
  </label>
  <label class="checkbox" disabled>
    Disabled Checkbox
    <input type="checkbox" disabled />
    <span class="checkmark"></span>
  </label>
</div>
```
