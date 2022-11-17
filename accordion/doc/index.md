# Accordion

Build vertically collapsing accordions

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
import '../../tokens/src/script.js';
```

### Example

```html story
  <div class="accordion shadow-md" id="accordionExample">
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingOne">
        <button
          class="accordion-button h3 gap-med"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Jenis Asuransi
        </button>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
      >
        <div class="accordion-body body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia neque efficitur, posuere leo consequat, dignissim urna. Praesent urna diam, mattis ut faucibus non, faucibus sit amet felis. Donec tincidunt urna velit, at vulputate metus mollis ac. Quisque vel posuere mauris. Suspendisse nec erat orci. Nunc sed justo et ligula congue condimentum. Vivamus elit nisl, sodales et massa quis, molestie porttitor metus. Fusce sed ipsum enim.
        </div>
      </div>
    </div>
  </div>

  <div class="accordion shadow-md" id="accordionExample2">
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button h3 gap-med"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa-solid fa-paperclip"></i>
          Jenis Asuransi
        </button>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
      >
        <div class="accordion-body body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia neque efficitur, posuere leo consequat, dignissim urna. Praesent urna diam, mattis ut faucibus non, faucibus sit amet felis. Donec tincidunt urna velit, at vulputate metus mollis ac. Quisque vel posuere mauris. Suspendisse nec erat orci. Nunc sed justo et ligula congue condimentum. Vivamus elit nisl, sodales et massa quis, molestie porttitor metus. Fusce sed ipsum enim.
        </div>
      </div>
    </div>
  </div>

  <div class="accordion shadow-md" id="accordionExample3">
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingThree">
        <button
          class="accordion-button h3 gap-med"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa-solid fa-key"></i>
          Login
        </button>
      <div
        id="collapseThree"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
      >
        <div class="accordion-body body2">
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
        </div>
      </div>
    </div>
  </div>
```

```html preview
<div class="accordion shadow-md" id="accordionExample">
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingOne">
        <button
          class="accordion-button h3 gap-med"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Jenis Asuransi
        </button>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
      >
        <div class="accordion-body body2">
          ...
        </div>
      </div>
    </div>
  </div>

  <div class="accordion shadow-md" id="accordionExample2">
    <div class="accordion-item">
      <h3 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button h3 gap-med"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fa-solid fa-paperclip"></i>
          Jenis Asuransi
        </button>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
      >
        <div class="accordion-body body2">
          ...
        </div>
      </div>
    </div>
  </div>
```
