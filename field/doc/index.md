# Forms

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
import 'https://code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css';
```

### Example

```html preview-story
<form class="d-grid gap-med mb-2">
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

<div class="d-grid gap">
  <button type="button" class="btn btn-primary">Primary</button>
</div>
```

### With Icon

Add <span style="color:red">.input-icon</span> class on`<div>`
And add <span style="color:red">.prefix</span> on `<i>` for left icon, or <span style="color:red">.suffix</span> for right icon.

```html preview-story
<form>
  <div class="w-full input-icon">
    <label for="Label">NIP</label>
    <input
      class="form-control"
      type="text"
      id="id"
      name="name"
      placeholder="NIP"
    />
    <i class="fa-solid fa-user prefix"></i>
    <div class="caption helper">Masukan NIP</div>
  </div>
</form>
```

### Password toggle button

```js preview-story
import { showPassword } from './field.js';

export const inputFieldPassEye = () => html`
  <form>
    <div class="w-full input-icon">
      <label for="Label">Password</label>
      <input
        class="form-control"
        type="password"
        id="password"
        name="name"
        placeholder="Masukan Password"
      />
      <i class="fa-solid fa-key prefix"></i>
      <span class="suffix" @click="${showPassword}">
        <i id="hide1" class="fa-solid fa-eye"></i>
        <i id="hide2" class="fa-solid fa-eye-slash"></i>
      </span>
      <div class="caption helper">Password min 8 karakter</div>
    </div>
  </form>
`;
```

JS script :

```
export function showPassword() {
  var x = document.getElementById('password');
  var y = document.getElementById('hide1');
  var z = document.getElementById('hide2');
  if (x.type === 'password') {
    x.type = 'text';
    y.style.display = 'block';
    z.style.display = 'none';
  } else {
    x.type = 'password';
    y.style.display = 'none';
    z.style.display = 'block';
  }
}
```

### Form Text

Form text below inputs can be styled with <span style="color:red">.helper</span>. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.

```html preview-story
<form>
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
```

### Disabled

Add the <span style="color:red">disabled</span> boolean attribute on an input to prevent user interactions and make it appear lighter.

```html preview-story
<form>
  <div class="d-grip w-full">
    <label for="Label">Label</label>
    <input
      class="form-control"
      type="text"
      id="id"
      name="name"
      placeholder="Placeholder"
      disabled
    />
    <div class="caption">
      <span class="helper">helper text</span>
    </div>
  </div>
</form>
```

#### Disabled fieldset example

```html preview-story
<form class="d-grid gap-med">
  <div class="w-full">
    <label for="Label">Disabled field</label>
    <input
      class="form-control"
      type="text"
      id="id"
      name="name"
      placeholder="Placeholder"
      disabled
    />
  </div>
  <div class="w-full">
    <label for="Label">Disabled dropdown</label>
    <select class="form-select" aria-label="disabled" disabled>
      <option selected>Open this dropdown menu</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  </div>
  <div class="w-full">
    <label class="checkbox" disabled>
      Disabled Checkbox
      <input type="checkbox" class="checkbox" disabled />
      <span class="checkmark"></span>
    </label>
  </div>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
</form>
```

## Form Controls

Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

### Sizing

Form text below inputs can be styled with <span style="color:red">.helper</span>. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.

```html preview-story
<form>
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
```

```html preview-story
<form>
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
```

### Form Controls

Give textual form controls like `<input>` and `<textarea>`

```html preview-story
<form class="d-grid gap-med">
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
```

### Readonly Input

replace <span style="color:red">.form-control</span> with <span style="color:red">.form-control-plaintext</span> to remove the default form field styling and preserve the correct margin and padding.

```html preview-story
<form>
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
```

### File Input

```html preview-story
<form class="d-grid gap-med">
  <div class="w-full ">
    <label for="Label">Upload KTP</label>
    <div class="d-flex gap-med">
      <input
        class="form-control"
        type="file"
        id="fileKTP"
        name="name"
        placeholder="Placeholder"
      />
      <label class="btn btn-primary" for="fileKTP">
        <i class="fa-solid fa-upload"></i>
      </label>
      <label
        class="btn btn-danger"
        onclick="document.getElementById('fileKTP').value = ''"
      >
        <i class="fa-solid fa-trash-can"></i>
      </label>
    </div>
    <div class="caption helper">All ext, max 2MB</div>
  </div>

  <div class="w-full ">
    <label for="Label">Upload BPKP</label>
    <div class="d-flex gap-med">
      <input
        class="form-control"
        type="file"
        id="fileBPKP"
        name="name"
        placeholder="Placeholder"
      />
      <label class="btn btn-primary" for="fileBPKP">
        <i class="fa-solid fa-upload"></i>
      </label>
    </div>
    <div class="caption helper">All ext, max 2MB</div>
  </div>
</form>
```

```html preview-story
  <div class="w-full input-icon">
    <label for="Label">Upload KTP-icon</label>
    <div class="d-flex gap-med">
      <input
        class="form-control"
        type="file"
        id="fileKTP-icon"
        name="name"
        placeholder="Placeholder-icon"
      />
      <span class="suffix">
        <label for="fileKTP-icon">
          <i class="fa-solid fa-upload "></i>
        </label>
        <label>
          <i
            class="fa-solid fa-trash-can"
            onclick="document.getElementById('fileKTP-icon').value = ''"
          ></i>
        </label>
      </span>
    </div>
    <div class="caption helper">All ext, max 2MB</div>
  </div>

  <div class="w-full input-icon">
    <label for="Label">Upload BPKP-icon</label>
    <div class="d-flex gap-med">
      <input
        class="form-control"
        type="file"
        id="fileBPKP-icon"
        name="name"
        placeholder="Placeholder-icon"
      />
      <label for="fileBPKP-icon" class="suffix">
        <i class="fa-solid fa-upload "></i>
      </label>
    </div>
    <div class="caption helper">All ext, max 2MB</div>
  </div>
</form>
```

## Example

```html preview-story
<div class="w-full input-icon">
    <label for="Label">FORM LAPORAN KERUGIAN KLAIM</label>
    <div class="d-flex gap-med">
      <input
        class="form-control"
        type="file"
        id="fileDownload-icon"
        name="name"
        placeholder="File JPG, PNG, PDF, Docx"
      />
      <label for="fileDownload-icon" class="suffix">
        <i class="fa-solid fa-cloud-arrow-up"></i>
      </label>
    </div>
    <div class="caption helper">File JPG, PNG, PDF, Docx</div>
  </div>
</form>
```

### Date Input

```html preview-story
<form>
  <div class="w-full">
    <label for="Label">Tanggal Lahir</label>
    <div class="d-flex gap-med">
      <input
        class="form-control"
        type="date"
        id="date2"
        name="name"
        placeholder="Placeholder"
      />
    </div>
  </div>
</form>
```

#### Button style datepicker

using jQuery UI Plugin

```
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
```

The input field ID (datepicker) needs to be specified as datepicker selector.

```
$(function(){
    $("DATEPICKERID").datepicker();
});
```

```js preview-story
import { showDate, showDate2 } from './field.js';
export const exDate = () => html`
  <form>
    <div class="w-full">
      <label for="date">Tanggal Lahir</label>
      <div class="d-flex gap-med">
        <input
          class="form-control"
          type="text"
          id="date"
          name="name"
          placeholder="Select Date"
          readonly
        /><span class="suffix" @click="${showDate}">
          <label class="btn btn-primary" for="date">
            <i class="fa-solid fa-calendar"></i>
          </label>
        </span>
      </div>
    </div>
  </form>

  <form>
    <div class="w-full">
      <label for="date3">Tanggal Lahir</label>
      <div
        class="d-flex gap-med"
        style="
    position: relative;
"
      >
        <input
          class="form-control"
          type="text"
          id="date3"
          name="name"
          placeholder="Select Date"
          readonly
        />
        <label
          class="suffix"
          @click="${showDate2}"
          for="date3"
          style="
    position: absolute;
    right: 19px;
    top: 12px;
"
        >
          <i class="fa-solid fa-calendar"></i>
        </label>
      </div>
    </div>
  </form>
`;
```
