# Typography

```js script
import { html } from 'lit';
import '~/tokens/variables.css';
import '~/tokens/src/styles.css';
```

## Usage

At this moment, our component is just a combination of some CSS Custom Properties representing the Design Tokens behind the button.
The other CSS file implements those design tokens onto any element with `.btn` class.

```html
<link rel="stylesheet" href="...." />
```

### Example

```js story
export const exHeading = () => html`
  <div class="bd-example">
    <table>
      <thead>
        <tr>
          <th>Heading</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span class="code">h1</span>
          </td>
          <td>
            <span class="h1">h1. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">h2</span>
          </td>
          <td>
            <span class="h2">h2. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">h3</span>
          </td>
          <td>
            <span class="h3">h3. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">h4</span>
          </td>
          <td>
            <span class="h4">h4. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">h5</span>
          </td>
          <td>
            <span class="h5">h5. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">h6</span>
          </td>
          <td>
            <span class="h6">h6. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">body1</span>
          </td>
          <td>
            <span class="body1">body1. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">body2</span>
          </td>
          <td>
            <span class="body2">body2. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">subtitle1</span>
          </td>
          <td>
            <span class="subtitle1">subtitle1. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">subtitle2</span>
          </td>
          <td>
            <span class="subtitle2">subtitle2. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">button1</span>
          </td>
          <td>
            <span class="button1">button1. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">button2</span>
          </td>
          <td>
            <span class="button2">button2. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">label</span>
          </td>
          <td>
            <span class="label">label. Adira heading</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="code">caption</span>
          </td>
          <td>
            <span class="caption">caption. Adira heading</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`;
```

```html
<h1>h1. Adira heading</h1>
<h2>h2. Adira heading</h2>
<h3>h3. Adira heading</h3>
<h4>h4. Adira heading</h4>
<h5>h5. Adira heading</h5>
<h6>h6. Adira heading</h6>
<span class="body1">body1. Adira heading</span>
<span class="body2">body2. Adira heading</span>
<span class="subtitile1">subtitile1. Adira heading</span>
<span class="subtitile2">subtitile2. Adira heading</span>
<span class="button1">button1. Adira heading</span>
<span class="button2">button2. Adira heading</span>
<span class="label">label. Adira heading</span>
<span class="caption">caption. Adira heading</span>
```

```html
<p class="h1">h1. Adira heading</p>
<p class="h2">h2. Adira heading</p>
<p class="h3">h3. Adira heading</p>
<p class="h4">h4. Adira heading</p>
<p class="h5">h5. Adira heading</p>
<p class="h6">h6. Adira heading</p>
```

### Alignment

```js preview-story
export const exAlignmentCenter = () => html`
  <figure class="text-center">
    <span class="h2">Pack my box with five dozen liquor jugs.</span></br>
    <span>It's center text alignment</span>
  </figure>
`;
```

```js preview-story
export const exAlignmentEnd = () => html`
  <figure class="text-end">
    <span class="h2">Pack my box with five dozen liquor jugs.</span></br>
    <span>It's end text alignment</span>
  </figure>
`;
```
