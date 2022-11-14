# Navbar

Documentation and examples for how to use navigation header, the navbar for branding, navigation and more

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

```js preview-story
export const exNavbar = () => html`
  <div class="bd-example d-grid">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="logo" src="https://www.adira.co.id/frontend/assets/img/logo.png"></img></a>
        <div class="navbar-toolbar">
          <div class="avatar">
          <img src="https://akcdn.detik.net.id/visual/2022/06/30/anime-spy-x-family-anya-forger_169.jpeg"></img>
          <label>Anya Forger</label>
          </div>
          <button class="btn">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </nav>
  </div>
`;
```

### With Menu

```js preview-story
export const exNavbarWmenu = () => html`
  <div class="bd-example d-grid">
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="logo" src="https://www.adira.co.id/frontend/assets/img/logo.png"></img></a>
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
        <form>
        </form>
        </div>
        <div class="navbar-toolbar">
          <div class="avatar">
          <img src="https://akcdn.detik.net.id/visual/2022/06/30/anime-spy-x-family-anya-forger_169.jpeg"></img>
          <label>Anya Forger</label>
          </div>
          <button class="btn">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </nav>
  </div>
`;
```
