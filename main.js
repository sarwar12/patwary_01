function clock() {
  var dates = new Date();
  var hour = dates.getHours();
  var ampm= hour>=12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;

  var minute = dates.getMinutes();
  var second = dates.getSeconds();

  document.querySelector(".hours").innerHTML = hour + ":";
  document.querySelector(".minutes").innerHTML = minute + ":";
  document.querySelector(".seconds").innerHTML = second + '' + ampm;
}
setInterval(clock, 1000);
