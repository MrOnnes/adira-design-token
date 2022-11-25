import 'https://code.jquery.com/jquery-3.6.0.js';
import 'https://code.jquery.com/ui/1.13.1/jquery-ui.js';

export function showPassword() {
  var x = document.getElementById('password');
  var y = document.getElementById('hide1');
  var z = document.getElementById('hide2');
  if (x.type === 'password') {
    x.type = 'text';
    y.style.display = 'block';
    z.style.display = 'none';
  } else {
    x.type = 'password';
    y.style.display = 'none';
    z.style.display = 'block';
  }
}

export function showDate() {
  console.log('function showDate');
  $('#date').datepicker();
}
export function showDate2() {
  console.log('function showDate');
  $('#date3').datepicker();
}
