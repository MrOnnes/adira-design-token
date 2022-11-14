# Carousel

A slideshow component for cycling through elements—images or slides of text—like a carousel.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js';
```

### Example

```js preview-story
export const exCarousel = () => html`

  <div id="carouselExample" class="carousel slide" data-ride="carousel">
    <div class="carousel-indicators">
      <button
        data-target="#carouselExample"
        data-slide-to="0"
        class="active"
      ></button>
      <button data-target="#carouselExample" data-slide-to="1"></button>
      <button data-target="#carouselExample" data-slide-to="2"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Img1"
          class="d-block"
          style="width:100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Img2"
          class="d-block"
          style="width:100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1668018064529-76c9849d6e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="Img3"
          class="d-block"
          style="width:100%"
        />
      </div>
    </div>

    <button class="carousel-control-prev" data-target="#carouselExample" data-slide="prev">
    <span class="caraousel-control-prev-icon"><span>
    </button>
    <button class="carousel-control-next" data-target="#carouselExample" data-slide="next">
    <span class="caraousel-control-next-icon"><span>
    </button>
  </div>
`;
```
