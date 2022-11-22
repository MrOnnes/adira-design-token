# Table

Documentation

```js script
import { html } from 'lit';
import '../../tokens/src/styles.css';
```

To make a cell span over multiple columns, use the <span style="color:red">colspan</span> or <span style="color:red">rowspan</span> attribute:

```html preview-story
<table class="table">
  <caption>
    1.1 Caption table
  </caption>
  <thead>
    <tr>
      <th>Title</th>
      <th>First</th>
      <th>Last</th>
      <th>Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colspan="2">Cell Span Example</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

you can use class alignment class <span style="color:red">.text-center</span> or <span style="color:red">.text-end</span> to change button position

```html preview-story
<table class="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>First</th>
      <th>Last</th>
      <th>Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td class="text-end">
        <button><i class="fa-solid fa-trash-can text-danger"></i></button>
        <button><i class="fa-solid fa-pen-to-square text-info"></i></button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td class="text-end">
        <button><i class="fa-solid fa-trash-can text-danger"></i></button>
        <button><i class="fa-solid fa-pen-to-square text-info"></i></button>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td colspan="2" class="text-center">Cell Span Example</td>
      <td class="text-end">
        <button><i class="fa-solid fa-trash-can text-danger"></i></button>
        <button><i class="fa-solid fa-pen-to-square text-info"></i></button>
      </td>
    </tr>
  </tbody>
</table>
```

```html preview-story
<table class="table">
  <thead>
    <tr>
      <th>Select</th>
      <th>Text</th>
      <th>Tags</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <label class="checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </td>
      <td>Mark</td>
      <td><label class="tags tag-success">Approved</label></td>
      <td class="text-end">
        <button><i class="fa-solid fa-trash-can text-danger"></i></button>
        <button><i class="fa-solid fa-pen-to-square text-info"></i></button>
      </td>
    </tr>
    <tr>
      <td>
        <label class="checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </td>
      <td>Jacob</td>
      <td><label class="tags tag-success">Approved</label></td>
      <td class="text-end">
        <button><i class="fa-solid fa-trash-can text-danger"></i></button>
        <button><i class="fa-solid fa-pen-to-square text-info"></i></button>
      </td>
    </tr>
    <tr>
      <td>
        <label class="checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </td>
      <td>Cell Span Example</td>
      <td><label class="tags tag-success">Approved</label></td>
      <td class="text-end">
        <button><i class="fa-solid fa-trash-can text-danger"></i></button>
        <button><i class="fa-solid fa-pen-to-square text-info"></i></button>
      </td>
    </tr>
  </tbody>
</table>
```

### Sorting Function

Add function and class <span style="color:red">.sorting</span> on table header

```html preview-story
<table class="table" id="TABLEIDHERE">
  <caption>
    1.1 Caption table
  </caption>
  <thead>
    <tr>
      <th class="sorting" onclick="sortTable(0)">Title</th>
      <th class="sorting" onclick="sortTable(1)">First</th>
      <th class="sorting" onclick="sortTable(2)">Last</th>
      <th class="sorting" onclick="sortTable(3)">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

```
function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    z,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById('TABLEIDHERE');
  switching = true;
  //Set the sorting direction to ascending:
  dir = 'asc';
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];
      z = rows[0].getElementsByClassName('sorting')[n];
      // document.querySelector('.sorting')
      // document.getElementsByClassName('sorting')
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == 'asc') {
        //console.log(i);
        //console.log(x);
        z.classList.remove('sorting_desc')
        z.classList.add('sorting_asc')
        console.log(z.className);
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'desc') {
        z.classList.remove('sorting_asc')
        z.classList.add('sorting_desc')
        console.log(z.className);
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
}

```
