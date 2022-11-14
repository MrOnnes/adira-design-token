# Pagination

Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

add on .page-item class:<br>
**.disabled** for disabled menu<br>
**.active** for active page

```js preview-story
export const exPagination = () => html`
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
`;
```

### Sizing

.pagination-lg

```js preview-story
export const exPaginationLg = () => html`
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
`;
```
