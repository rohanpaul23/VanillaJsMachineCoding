setInterval(function () {
  d = new Date();
  hour = d.getHours()
  minutes = d.getMinutes()
  seconds = d.getSeconds()

  document.getElementById("hour").innerHTML = hour
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
}, 1000);