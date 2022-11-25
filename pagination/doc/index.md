# Pagination

Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

add on <span style="color:red">.page-item</span> class:<br>
<span style="color:red">.disabled</span> for disabled page<br>
<span style="color:red">.active</span> for active page

```html preview-story
<nav>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link disabled" href="#">
        <i class="fa-solid fa-chevron-left"></i>
      </a>
    </li>
    <li class="page-item"><a class="page-link " href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link active" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="fa-solid fa-chevron-right"></i>
      </a>
    </li>
  </ul>
</nav>
```

### Sizing

.pagination-lg

```html preview-story
<nav>
  <ul class="pagination pagination-lg">
    <li class="page-item">
      <a class="page-link disabled" href="#">
        <i class="fa-solid fa-chevron-left"></i>
      </a>
    </li>
    <li class="page-item"><a class="page-link " href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link active" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="fa-solid fa-chevron-right"></i>
      </a>
    </li>
  </ul>
</nav>
```

```html preview-story
<div class="datatable-pagination">
  <p class="caption">Showing</p>
  <select class="form-select">
    <option selected>1</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <p class="caption">dari 10 data</p>
</div>
```
