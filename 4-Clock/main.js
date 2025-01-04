window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
  let date = new Date();
  date.setTime(500000);

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  h == 0 ? h = 12 : h;

  h > 12 ? (h = h - 12, session = "PM") : h;

  h < 10 ? (h = "0" + h) : h;

  m < 10 ? (m = "0" + m) : m;

  s < 10 ? (s = "0" + s) : s;

  const time = `${h}:${m}<small>.${s} ${session}</small>`;
  document.getElementById("DisplayClock").innerHTML = time;
  setTimeout(showTime, 1000);

  let bg

  const userName = "Mick";
  const user = document.getElementById("user");

  if ((h >= 5 && h < 10) && session === "AM") {
    bg = "https://res.cloudinary.com/ddvmpxtv1/image/upload/v1736003525/Clock/morning_wtmlii.jpg";
    user.innerHTML=`The time has come, ${userName}, you must rise`;
  }

  if (h >= 10 && session === "AM" || h <= 4 && session === "PM") {
    bg = "https://res.cloudinary.com/ddvmpxtv1/image/upload/v1736004787/Clock/afternoon_2_wozjdn.jpg";
    user.innerHTML=`Are you awake, ${userName}? Good.`;
  }

  if (h > 4 && session === "PM") {
    bg = "https://res.cloudinary.com/ddvmpxtv1/image/upload/v1736003526/Clock/evening_u9dd12.jpg";
    user.innerHTML=`Evening falls, ${userName}. Are you prepared?`;
  }

  if ((h === 12 || h < 5) && session === "AM") {
    bg = "https://res.cloudinary.com/ddvmpxtv1/image/upload/v1736003526/Clock/night_kpent3.jpg";
    user.innerHTML=`The night is dark and full of terrors, ${userName}.`;
  }

  const body = document.querySelector("body");

  body.style.background = `url(${bg}) no-repeat center center`;
  body.style.backgroundSize = "cover";

  document
    .querySelector(".focus-container input")
    addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
      const focus = document.querySelector(".focus-container input");
      this.document.querySelector(".focus-container").innerHTML = `<h6>Today we will:</h6><p>${focus.value}</p>`;
      }
    })
}
