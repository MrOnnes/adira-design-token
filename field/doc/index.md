# Forms

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

## Usage

At this moment, our component is just a combination of some CSS Custom Properties representing the Design Tokens.

```html
<link rel="stylesheet" href="...." />
```

### Example

```js preview-story
export const exampleField = () => html`
  <form class="bd-example gap-med mb-2">
    <div class="w-full mb-2 ">
      <label for="Label">NIP</label>
      <input
        class="form-control  mb-2"
        type="text"
        id="id"
        name="NIP"
        placeholder="NIP"
      />
      <label class="checkbox"
        >Remember Me
        <input type="checkbox" checked="checked" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="w-full">
      <label for="Label">Password</label>
      <input
        class="form-control"
        type="password"
        id="id"
        name="password"
        placeholder="Password"
      />
      <span class="a">Forgot Password</span>
    </div>
  </form>

  <div class="bd-example d-grid gap">
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
`;
```

### Form Text

Form text below inputs can be styled with .helper. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.

```js preview-story
export const inputField = () => html`
  <form class="bd-example">
    <div class="w-full">
      <label for="Label">Label</label>
      <input
        class="form-control"
        type="text"
        id="id"
        name="name"
        placeholder="Placeholder"
      />
      <div class="caption helper">helper text</div>
    </div>
  </form>
`;
```

### Disabled

Form text below inputs can be styled with .helper. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.

```js preview-story
export const inputFieldDisabled = () => html`
  <form class="bd-example">
    <div class="w-full">
      <label for="Label">Label</label>
      <input
        class="form-control"
        type="text"
        id="id"
        name="name"
        placeholder="Placeholder"
        disabled
      />
      <div class="caption helper">helper text</div>
    </div>
  </form>
`;
```

### Sizing

Form text below inputs can be styled with .helper. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.

```js preview-story
export const inputFieldLarge = () => html`
  <form class="bd-example">
    <div class="w-full">
      <label for="Label">Label</label>
      <input
        class="form-control form-control-lg"
        type="text"
        id="id"
        name="name"
        placeholder="Placeholder"
      />
      <div class="caption helper">helper text</div>
    </div>
  </form>
`;
```

```js preview-story
export const inputFieldSmall = () => html`
  <form class="bd-example">
    <div class="w-full">
      <label for="Label">Label</label>
      <input
        class="form-control form-control-sm"
        type="text"
        id="id"
        name="name"
        placeholder="Placeholder"
      />
      <div class="caption helper">helper text</div>
    </div>
  </form>
`;
```

### Readonly Input

```
.form-control-plaintext
```

```js preview-story
export const inputFieldReadonly = () => html`
  <form class="bd-example">
    <div class="w-full">
      <label for="Label">Email</label>
      <input
        class="form-control-plaintext"
        type="text"
        id="id"
        name="name"
        value="email@adira.co.id"
        readonly
      />
    </div>
  </form>
`;
```

### Form Controls

Give textual form controls like

```
<input>
```

and

```
<textarea>
```

```js preview-story
export const inputFieldTextarea = () => html`
  <form class="bd-example">
    <div class="w-full">
      <label for="Label">Email</label>
      <input
        class="form-control"
        type="text"
        id="id"
        name="name"
        placeholder="email@adira.co.id"
      />
    </div>
    <div class="w-full">
      <label for="Label">Textarea</label>
      <textarea class="form-control" id="id"></textarea>
    </div>
  </form>
`;
```
