# Carousel

A slideshow component for cycling through elements—images or slides of text—like a carousel.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
import '../../tokens/src/script.js';
```

### Example

```html preview-story
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="https://loremflickr.com/640/360"
        class="d-block w-full"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://loremflickr.com/640/360"
        class="d-block w-full"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://loremflickr.com/640/360"
        class="d-block w-full"
        alt="..."
      />
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span><i class="fa-solid fa-chevron-left"></i></span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span><i class="fa-solid fa-chevron-right"></i></span>
  </button>
</div>
```
