# Card

card provide a flexible and extensible content container with multiple variants and options.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

<br/>

## About

<br/>

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards

<br/>

### Example

<br/>
Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no margin by default, so use spacing utilities as needed.
<br/>
<br/>
Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.
<br/>
<br/>

```html preview-story
<div class="card shadow-md" style="width: 18rem;">
  <img
    class="placeholder-img"
    src="https://images.unsplash.com/photo-1668101205453-97cd2ba2bb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
  />

  <div class="card-body">
    <div class="card-title subtitle1">Card Title</div>
    <label class="card-subtitle">Secondary Text</label>
    <p class="card-text caption">Lorem Ipsum sit dolor amet</p>
    <div class="card-action">
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-link">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </div>
  </div>
</div>
```

### Without Button

```html preview-story
<div class="card shadow-md" style="width: 18rem;">
  <img
    class="placeholder-img"
    src="https://images.unsplash.com/photo-1668101205453-97cd2ba2bb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
  />

  <div class="card-body">
    <div class="card-title subtitle1">Card Title</div>
    <label class="card-subtitle">Secondary Text</label>
    <p class="card-text caption">Lorem Ipsum sit dolor amet</p>
  </div>
</div>
```

## Content Types

<br/>
card support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

<br/>
<br/>

### Body

<br/>
The building block of a card is the <code>.card-body</code>. Use it whenever you need a padded section within a card.
<br/>

```html preview-story
<div class="card shadow-md">
  <div class="card-body">This is some text within a card body.</div>
</div>
```

<br/>

### Titles, Text, and Links

<br/>
Card titles are used by adding .card-title to a <code>&lt;h*&gt;</code> tag. In the same way, links are added and placed next to each other by adding .card-link to an <code>&lt;a&gt;</code> tag.

Subtitles are used by adding a .card-subtitle to a <code>&lt;h\*&gt;</code> tag. If the .card-title and the .card-subtitle items are placed in a .card-body item, the card title and subtitle are aligned nicely.

<br/>

```html preview-story
<div class="card shadow-md" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <h5 class="card-subtitle mb-2 text-muted">Card subtitle</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <div class="card-action">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</div>
```

<br/>

### Images

<br/>
<code>.card-img-top</code> places an image to the top of the card. With <code>.card-text</code>, text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.
<br/>

```html preview-story
<div class="card shadow-md" style="width: 18rem;">
  <img
    class="card-img-top"
    src="https://images.unsplash.com/photo-1668101205453-97cd2ba2bb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
    alt="Card image cap"
  />
  <div class="card-body">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
```

<br/>

### List groups

<br/>
Create lists of content in a card with a flush list group.
<br/>

```html preview-story
<div class="card shadow-md" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
```

<br/>

```html preview-story
<div class="card shadow-md" style="width: 18rem;">
  <div class="card-header">Featured</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
```

<br/>

### Kitchen sink

<br/>
Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.
<br/>

```html preview-story
<div class="card shadow-md" style="width: 18rem;">
  <img
    class="card-img-top"
    src="https://images.unsplash.com/photo-1668101205453-97cd2ba2bb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
    alt="Card image cap"
  />
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <div class="card-action">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</div>
```

<br/>

### Header and Footer

<br/>
Add an optional header and/or footer within a card.
<br/>

```html preview-story
<div class="card shadow-md">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

<br/>

```html preview-story
<div class="card">
  <div class="card-header">Quote</div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </div>
</div>
```

<br/>

Card headers can be styled by adding .card-header to &lt;h\*&gt; elements.

<br/>

```html preview-story
<div class="card shadow-md">
  <h4 class="card-header">Featured</h4>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

<br/>

```html preview-story
<div class="card shadow-md">
  <div class="card-header">Quote</div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </div>
</div>
```

<br/>
<br/>

```html preview-story
<div class="card text-center shadow-md">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>
```

<br/>

## Sizing

<br/>

Cards assume no specific width to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.

<br/>

### Using grid markup

<br/>
Using the grid, wrap cards in columns and rows as needed.
<br/>

```html preview-story
<div class="row">
  <div class="col-sm-6">
    <div class="card shadow-sm">
      <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <div class="card-action">
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card shadow-sm">
      <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <div class="card-action">
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

<br/>

### Using utilites

<br/>
Use our handful of available sizing utilities to quickly set a card’s width.
<br/>

```html preview-story
<div class="card w-75 shadow-sm">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Button</a>
    </div>
  </div>
</div>

<div class="card w-50 shadow-sm">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Button</a>
    </div>
  </div>
</div>
```

<br/>

### Using custom CSS

<br/>
Use custom CSS in your stylesheets or as inline styles to set a width.
<br/>

```html preview-story
<div class="card shadow-sm" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

<br/>

### Text alignment

<br/>
You can quickly change the text alignment of any card—in its entirety or specific parts—with our text align classes.
<br/>

```html preview-story
<div class="card shadow-sm" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

<div class="card text-center shadow-sm" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

<div class="card text-right shadow-sm" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

<br/>

### Navigation

<br/>
Add some navigation to a card’s header (or block) with Bootstrap’s nav components.
<br/>

```html preview-story
<div class="card text-center shadow-sm">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

<br/>

```html preview-story
<div class="card text-center shadow-sm">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h4 class="card-title">Special title treatment</h4>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <div class="card-action">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

<br/>

## Images

<br/>
Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.
<br/>

### Image caps

<br/>
Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.
<br/>

```html preview-story
<div class="card mb-3 shadow-sm">
  <img
    class="card-img-top"
    src="https://picsum.photos/200/300"
    alt="Card image cap"
  />
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </p>
    <p class="card-text">
      <small class="text-muted">Last updated 3 mins ago</small>
    </p>
  </div>
</div>
<div class="card shadow-sm">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </p>
    <p class="card-text">
      <small class="text-muted">Last updated 3 mins ago</small>
    </p>
  </div>
  <img
    class="card-img-bottom"
    src="https://picsum.photos/200/300"
    alt="Card image cap"
  />
</div>
```

<br/>

### Image overlay

<br/>
Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.
<br/>

```html preview-story
<div class="card bg-dark text-white shadow-sm">
  <img
    class="card-img"
    src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79"
    alt="Card image"
  />
  <div class="card-img-overlay">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
```

<br/>

## Card Style

<br/>
Cards include various options for customizing their backgrounds, borders, and color.
<br/>

### Background and color

<br/>
Use text and background utilities to change the appearance of a card.
<br/>

```html preview-story
<div class="card  bg-primary mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Primary card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card  bg-secondary mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Secondary card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card  bg-success mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Success card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card  bg-danger mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Danger card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card  bg-warning mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Warning card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card  bg-info mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Info card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card bg-light mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Light card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card  bg-dark mb-3 shadow-sm text-white" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Dark card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
```

<br/>

### Border

<br/>
Use border utilities to change just the border-color of a card. Note that you can put .text-{color} classes on the parent .card or a subset of the card’s contents as shown below.
<br/>

```html preview-story
<div class="card border-primary mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h4 class="card-title">Primary card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card border-secondary mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-secondary">
    <h4 class="card-title">Secondary card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card border-success mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-success">
    <h4 class="card-title">Success card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card border-danger mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-danger">
    <h4 class="card-title">Danger card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card border-warning mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-warning">
    <h4 class="card-title">Warning card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card border-info mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-info">
    <h4 class="card-title">Info card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card border-light mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Light card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
<div class="card border-dark mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h4 class="card-title">Dark card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>
```

<br/>

### Mixins utilities

<br/>
You can also change the borders on the card header and footer as needed, and even remove their background-color with .bg-transparent.
<br/>

```html preview-story
<div class="card border-success mb-3 shadow-sm" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h4 class="card-title">Success card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
```

<br/>

## Card layout

<br/>

In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive**.

<br/>

### Card groups

<br/>
Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.
<br/>

```html preview-story
<div class="card-group">
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
```

<br/>

<br/>
When using card groups with footers, their content will automatically line up.
<br/>

```html preview-story
<div class="card-group">
  <div class="card">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
```

<br/>

### Card decks

<br/>
Need a set of equal width and height cards that aren’t attached to one another? Use card decks.
<br/>

```html preview-story
<div class="card-deck">
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
```

<br/>

<br/>
Just like with card groups, card footers in decks will automatically line up.
<br/>

```html preview-story
<div class="card-deck">
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
```

<br/>

### Card columns

<br/>
Cards can be organized into Masonry-like columns with just CSS by wrapping them in .card-columns. Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.

Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to display: inline-block as column-break-inside: avoid isn’t a bulletproof solution yet.
<br/>

```html preview-story
<div class="card-columns">
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title that wraps to a new line</h4>
      <p class="card-text">
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
  </div>
  <div class="card p-3 shadow-sm">
    <blockquote class="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card shadow-sm">
    <img
      class="card-img-top"
      src="https://picsum.photos/200"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card bg-primary text-center p-3 shadow-sm">
    <blockquote class="blockquote mb-0">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat.
      </p>
      <footer class="blockquote-footer">
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center shadow-sm">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This card has supporting text below as a natural lead-in to additional
        content.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div class="card shadow-sm">
    <img class="card-img" src="https://picsum.photos/200" alt="Card image" />
  </div>
  <div class="card p-3 text-right shadow-sm">
    <blockquote class="blockquote mb-0">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card shadow-sm">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
```

<br/>
<br/>
Cards can be organized into Masonry-like columns with just CSS by wrapping them in .card-columns. Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.

Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to display: inline-block as column-break-inside: avoid isn’t a bulletproof solution yet.
<br/>

```story
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
```
