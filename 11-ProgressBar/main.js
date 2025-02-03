const goButton = document.getElementById('goButton');
const elem = document.getElementById('myBar');
const bgImg = document.getElementById('Bg-img');

bgImg.classList.add("blur");

let root_speed = getComputedStyle(document.documentElement);

document.documentElement.style.setProperty('--speed', '15s');

let speed = 50;

document.documentElement.style.setProperty('--speed', `${speed/10}s`);

let i = 0;
let width = 0;

goButton.addEventListener('click', () => {
  console.log(width);
  console.log(i);
  if(i==0){
    i = 1;
    let id = setInterval(frame, speed);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 1;
        goButton.innerHTML = "Obfuscate";
        goButton.disabled=false;
      } else {
        goButton.disabled=true;
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        bgImg.classList.remove("blur");
        bgImg.classList.add("clear");
      }
    }
  } else {
    i=1;
    let id = setInterval(reverseFrame, speed);
    function reverseFrame() {
      if (width <= 0) {
        clearInterval(id);
        i = 0;
        goButton.innerHTML = "Clarify";
        goButton.disabled=false;
        bgImg.classList.add("blur");
        bgImg.classList.remove("reblur");
      } else {
        goButton.disabled=true;
        width--;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        bgImg.classList.remove("clear");
        bgImg.classList.add("reblur");
      }
    }
  }
});
