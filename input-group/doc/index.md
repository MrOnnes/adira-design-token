# Input Group

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

## Basic example

Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place `<label>`s outside the input group.

```js preview-story
export const exampleInputGroup = () => html`
  <div class="d-grid gap-mid">
    <div class="input-group"></div>
  </div>
`;
```
