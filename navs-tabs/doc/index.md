# Navs and tabs

Documentation and examples for how to use navigation components

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

<span style="color:red">.disabled</span> for disabled menu<br>
<span style="color:red">.active</span> for active menu

```html preview-story
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Page 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Page 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```

### With Icon

replace <span style="color:red">.nav-link</span> to <span style="color:red">.nav-link-icon</span>

```html preview-story
<ul class="nav nav-icon">
  <li class="nav-item">
    <a class="nav-link active" href="#">
      <i class="fa-solid fa-house"></i>Active
    </a>
  </li>
  <li class="nav-item">
    <a class=" nav-link" href="#"> <i class="fa-solid fa-user"></i>Page 2</a>
  </li>
  <li class="nav-item">
    <a class=" nav-link" href="#"> <i class="fa-solid fa-gear"></i>Page 3</a>
  </li>
  <li class="nav-item">
    <a class=" nav-link disabled" href="#">
      <i class="fa-solid fa-bars"></i>Disabled</a
    >
  </li>
</ul>
```

### Underline style

add class <span style="color:red">.nav-border</span>

```html preview-story
<ul class="nav nav-border">
  <li class="nav-item">
    <a class="nav-link  active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  " href="#">Page 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  " href="#">Page 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link   disabled" href="#">Disabled</a>
  </li>
</ul>

<ul class="nav nav-border nav-icon">
  <li class="nav-item">
    <a class=" nav-link   active" href="#">
      <i class="fa-solid fa-house"></i>Active
    </a>
  </li>
  <li class="nav-item">
    <a class=" nav-link  " href="#"> <i class="fa-solid fa-user"></i>Page 2</a>
  </li>
  <li class="nav-item">
    <a class=" nav-link  " href="#"> <i class="fa-solid fa-gear"></i>Page 3</a>
  </li>
  <li class="nav-item">
    <a class=" nav-link   disabled" href="#">
      <i class="fa-solid fa-bars"></i>Disabled</a
    >
  </li>
</ul>
```

### Pills style

add class <span style="color:red">.nav-pills</span>

```html preview-story
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link   active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  " href="#">Page 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link  " href="#">Page 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link   disabled" href="#">Disabled</a>
  </li>
</ul>

<ul class="nav nav-pills nav-icon">
  <li class="nav-item">
    <a class=" nav-link   active" href="#">
      <i class="fa-solid fa-house"></i>Active
    </a>
  </li>
  <li class="nav-item">
    <a class=" nav-link  " href="#"> <i class="fa-solid fa-user"></i>Page 2</a>
  </li>
  <li class="nav-item">
    <a class=" nav-link  " href="#"> <i class="fa-solid fa-gear"></i>Page 3</a>
  </li>
  <li class="nav-item">
    <a class=" nav-link   disabled" href="#">
      <i class="fa-solid fa-bars"></i>Disabled</a
    >
  </li>
</ul>
```
