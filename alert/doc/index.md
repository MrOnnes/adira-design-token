# Alert

</br>

### Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

</br>

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

### Example

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight required contextual classes (e.g., <code>.alert-success</code>). For inline dismissal, use the alerts jQuery plugin.

```html preview-story
<div role="alert" class="alert alert-info">
  This is a info alert—check it out!
</div>
<div role="alert" class="alert alert-success">
  This is a success alert—check it out!
</div>
<div role="alert" class="alert alert-warning">
  This is a warning alert—check it out!
</div>
<div role="alert" class="alert alert-danger">
  This is a danger alert—check it out!
</div>
```

### Link color

Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.

```html preview-story
<div role="alert" class="alert alert-info">
  This is a info alert with <a href="#" class="alert-link">an example link</a>.
  Give it a click if you like.
</div>
<div role="alert" class="alert alert-success">
  This is a success alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
<div role="alert" class="alert alert-warning">
  This is a warning alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
<div role="alert" class="alert alert-danger">
  This is a danger alert with
  <a href="#" class="alert-link">an example link</a>. Give it a click if you
  like.
</div>
```

### Additional Content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

```html preview-story
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p class="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</div>
```

<!--
### Dismissing

Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:

- Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.
- If you’re building our JavaScript from source, it [requires util.js](https://getbootstrap.com/docs/4.0/getting-started/javascript/#util). The compiled version includes this.
- Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the <code>.close</code> button.
- On the dismiss button, add the data-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the <code>&lt;button&gt;</code> element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the <code>.fade</code> and <code>.show</code> classes.
  You can see this in action with a live demo:

```html preview-story
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields
  below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&#215;</span>
  </button>
</div>
``` -->
