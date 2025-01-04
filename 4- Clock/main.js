window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  let date = new Date();
  // date.setTime(50000);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  h == 0 ? h = 12 : h;

  h > 12 ? (h = h - 12, session = "PM") : h;

  h < 10 ? (h = "0" + h) : h;

  m < 10 ? (m = "0" + m) : m;

  s < 10 ? (s = "0" + s) : s;

  const time = h + ":" + m + ":" + s + " " + session;
  console.log(time);
  document.getElementById("DisplayClock").innerHTML = time;
}
