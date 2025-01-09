let text = document.getElementById('typewriter');
text = document.querySelector("#typewriter h2");

let str = text.textContent.split("");

text.innerHTML = "";

function typewrite() {
  if(str.length > 0) {
    text.innerHTML += str.shift();
    setTimeout("typewrite()", Math.floor(Math.random() * (150, 200)));
  }
}

typewrite();
