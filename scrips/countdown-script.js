var countDownDate = new Date("Apr 27, 2022 00:00:00")
var day = String(countDownDate.getDate()).padStart(2, '0');
var month = String(countDownDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var year = countDownDate.getFullYear();

countDownDate = day + '/' + month + '/' + year;
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('launch-date').innerText = countDownDate

});

var x = setInterval(function () {
  // countDownDate needs to be set as: Month day, year hh:mm:ss //
  var countDownDate = new Date("Apr 27, 2022 00:00:00")
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (hours < 10) {
    hours = "0" + hours
  }
  if (days < 10) {
    days = "0" + days
  }

  document.getElementById("timer").innerText = days + " : " + hours + " : "
    + minutes + " : " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);