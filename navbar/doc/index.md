# Navbar

Documentation and examples for how to use navigation header, the navbar for branding, navigation and more

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

```html story
<div class="d-grid">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          class="logo"
          src="https://www.adira.co.id/frontend/assets/img/logo.png"
      /></a>
      <div class="navbar-toolbar">
        <div class="avatar">
          <img
            src="https://akcdn.detik.net.id/visual/2022/06/30/anime-spy-x-family-anya-forger_169.jpeg"
          />
          <label>Anya Forger</label>
        </div>
        <button class="btn">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </nav>
</div>
```

```html preview
<div class="d-grid">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="..." />
      </a>
      <div class="navbar-toolbar">
        <div class="avatar">
          <img src="..." />
          <label>...</label>
        </div>
        <button class="btn">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </nav>
</div>
```

### With Menu

Resize your browser to see </br>
<span style="color:red">.active</span> for active menu

```html story
<div class="d-grid">
  <nav class="navbar navbar-expand">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          class="logo"
          src="https://www.adira.co.id/frontend/assets/img/logo.png"
      /></a>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
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
        <form></form>
      </div>
      <div class="navbar-toolbar">
        <div class="avatar">
          <img
            src="https://akcdn.detik.net.id/visual/2022/06/30/anime-spy-x-family-anya-forger_169.jpeg"
          />
          <label>Anya Forger</label>
        </div>
        <button class="btn">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </nav>
</div>
```

```html preview
<div class="d-grid">
  <nav class="navbar navbar-expand">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logo" src="..." />
      </a>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
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
        <form></form>
      </div>
      <div class="navbar-toolbar">
        <div class="avatar">
          <img src="..." />
          <label>...</label>
        </div>
        <button class="btn">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </nav>
</div>
```

```html story
<div class="navbar">
  <div class="topinfo gap-med justify-content-start"></div>
  <div class="topmenu gap-med justify-content-end">
    <button><i class="fa-solid fa-bell"></i></button>
    <button><i class="fa-solid fa-gear"></i></button>
    <div class="avatar">
      <img
        src="https://akcdn.detik.net.id/visual/2022/06/30/anime-spy-x-family-anya-forger_169.jpeg"
      />
    </div>
    <div id="username">Anya Forger</div>
    <button><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
  </div>
</div>
```

```html preview
<div class="navbar">
  <div class="topinfo gap-med justify-content-start"></div>
  <div class="topmenu gap-med justify-content-end">
    <button><i class="fa-solid fa-bell"></i></button>
    <button><i class="fa-solid fa-gear"></i></button>
    <div class="avatar">
      <img src="..." />
    </div>
    <div id="username">...</div>
    <button><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
  </div>
</div>
```

```html story
<div class="topbar">
  <div class="topinfo gap-med justify-content-start">
    <i class="fa-solid fa-location-dot"></i>
    <div id="location" style="margin-right:20px;">0201 Bandung</div>
    <span>|</span>
    <i class="fa-solid fa-user"></i>
    <div id="role">Customer Services</div>
  </div>
  <div class="topmenu gap-med justify-content-end">
    <button><i class="fa-solid fa-bell"></i></button>
    <button><i class="fa-solid fa-gear"></i></button>
    <div id="username">Anya Forger</div>
    <button><i class="fa-solid fa-user"></i></button>
  </div>
</div>
```

```html preview
<div class="topbar">
  <div class="topinfo gap-med justify-content-start">
    <i class="fa-solid fa-location-dot"></i>
    <div id="location" style="margin-right:20px;">...</div>
    <span>|</span>
    <i class="fa-solid fa-user"></i>
    <div id="role">...</div>
  </div>
  <div class="topmenu gap-med justify-content-end">
    <button><i class="fa-solid fa-bell"></i></button>
    <button><i class="fa-solid fa-gear"></i></button>
    <div id="username">...</div>
    <button><i class="fa-solid fa-user"></i></button>
  </div>
</div>
```

```html story
<div class="topbar">
  <div class="topinfo gap-med justify-content-start"></div>
  <div class="topmenu gap-med justify-content-end">
    <button><i class="fa-solid fa-bell"></i></button>
    <button><i class="fa-solid fa-gear"></i></button>
    <div id="username">Anya Forger</div>
    <button><i class="fa-solid fa-user"></i></button>
  </div>
</div>
```

```html preview
<div class="topbar">
  <div class="topinfo gap-med justify-content-start"></div>
  <div class="topmenu gap-med justify-content-end">
    <button><i class="fa-solid fa-bell"></i></button>
    <button><i class="fa-solid fa-gear"></i></button>
    <div id="username">...</div>
    <button><i class="fa-solid fa-user"></i></button>
  </div>
</div>
```
