# Flex

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Enable Flex

Apply display utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties.

```html preview-story
<div class="ex-flex">
  <div class="d-flex p-2">flexbox container</div>
</div>
```

#### Inline-flex

```html preview-story
<div class="ex-flex">
  <div class="d-inline-flex p-2">flexbox container</div>
</div>
```

#### Direction

Use <span style="color:red">.flex-row</span> to set a horizontal direction (the browser default), or <span style="color:red">.flex-row-reverse</span> to start the horizontal direction from the opposite side.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex flex-row mb-3">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
  <div class="d-flex flex-row-reverse">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
</div>
```

Use <span style="color:red">.flex-column</span> to set a vertical direction, or <span style="color:red">.flex-column-reverse</span> to start the vertical direction from the opposite side.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex flex-column mb-3">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
  <div class="d-flex flex-column-reverse">
    <div class="p-2">Flex item 1</div>
    <div class="p-2">Flex item 2</div>
    <div class="p-2">Flex item 3</div>
  </div>
</div>
```

#### Justify Content

Use <span style="color:red">justify-content</span> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if <span style="color:red">flex-direction: column</span>). Choose from <span style="color:red">start</span> (browser default), <span style="color:red">end, center, between, around,</span> or <span style="color:red">evenly</spen>.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex justify-content-start mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-end mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-center mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-between mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-around mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-evenly">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
```

#### Align Item

Use <span style="color:red">align-items</span> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <span style="color:red">flex-direction: column</span>). Choose from <span style="color:red">start, end, center, baseline,</span> or <span style="color:red">stretch</span> (browser default).

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex align-items-start mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-end mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-center mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-baseline mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-stretch" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
```

#### Align Self

Use <span style="color:red">align-self</span> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if <span style="color:red">flex-direction: column</span>). Choose from the same options as <span style="color:red">align-items: start, end, center, baseline</span>, or <span style="color:red">stretch</span> (browser default).

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-start p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-end p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-center p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-baseline p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-stretch p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
```

#### Fill

Use the <span style="color:red">.flex-fill</span> class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex">
    <div class="p-2 flex-fill">Flex item with a lot of content</div>
    <div class="p-2 flex-fill">Flex item</div>
    <div class="p-2 flex-fill">Flex item</div>
  </div>
</div>
```

#### Grow and shrink

Use <span style="color:red">.flex-grow-\*</span> utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the <span style="color:red">.flex-grow-1</span> elements uses all available space it can, while allowing the remaining two flex items their necessary space.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex">
    <div class="p-2 flex-grow-1">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Third flex item</div>
  </div>
</div>
```

Use <span style="color:red">.flex-shrink-\*</span> utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with <span style="color:red">.flex-shrink-1</span> is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with <span style="color:red">.w-full</span>.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex">
    <div class="p-2 w-full">Flex item</div>
    <div class="p-2 flex-shrink-1">Flex item</div>
  </div>
</div>
```

#### Auto Margin

Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<span style="color:red">.me-auto</span>), and pushing two items to the left (<span style="color:red">.ms-auto</span>).

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex mb-3">
    <div class="me-auto p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="ms-auto p-2">Flex item</div>
  </div>
</div>
```

#### With Align Items

Vertically move one flex item to the top or bottom of a container by mixing <span style="color:red">align-items</span>, <span style="color:red">flex-direction: column</span>, and <span style="color:red">margin-top: auto</span> or <span style="color:red">margin-bottom: auto</span>.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex align-items-start flex-column mb-3" style="height: 200px;">
    <div class="mb-auto p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex align-items-end flex-column mb-3" style="height: 200px;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="mt-auto p-2">Flex item</div>
  </div>
</div>
```

#### Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with <span style="color:red">.flex-nowrap</span>, wrapping with <span style="color:red">.flex-wrap</span>, or reverse wrapping with <span style="color:red">.flex-wrap-reverse</span>.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex flex-nowrap" style="width: 8rem;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
</div>
```

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex flex-wrap">
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex flex-wrap-reverse">
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```

#### Align Content

Use <span style="color:red">align-content</span> utilities on flexbox containers to align flex items _together_ on the cross axis. Choose from <span style="color:red">start</span> (browser default), <span style="color:red">end</span>, <span style="color:red">center</span>, <span style="color:red">between</span>, <span style="color:red">around</span>, or <span style="color:red">stretch</span>. To demonstrate these utilities, we’ve enforced flex-wrap: wrap and increased the number of flex items.

**Heads up!** This property has no effect on single rows of flex items.

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex align-content-start flex-wrap mb-3" style="height: 200px">
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex align-content-end flex-wrap mb-3" style="height: 200px">
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex align-content-center flex-wrap mb-3" style="height: 200px">
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```

```html preview-story
<div class="ex-flex mb-3">
  <div
    class="d-flex align-content-between flex-wrap mb-3"
    style="height: 200px"
  >
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```

```html preview-story
<div class="ex-flex mb-3">
  <div class="d-flex align-content-around flex-wrap mb-3" style="height: 200px">
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```

```html preview-story
<div class="ex-flex mb-3">
  <div
    class="d-flex align-content-stretch flex-wrap mb-3"
    style="height: 200px"
  >
    <div class="p-2">Flex 1</div>
    <div class="p-2">Flex 2</div>
    <div class="p-2">Flex 3</div>
    <div class="p-2">Flex 4</div>
    <div class="p-2">Flex 5</div>
    <div class="p-2">Flex 6</div>
    <div class="p-2">Flex 7</div>
    <div class="p-2">Flex 8</div>
    <div class="p-2">Flex 9</div>
    <div class="p-2">Flex 10</div>
  </div>
</div>
```
