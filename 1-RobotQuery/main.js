const submitBtn = document.querySelector('button[type=submit]');

submitBtn.disabled = true;

const elements =  document.querySelectorAll('.element');
const selectColor = document.getElementById('selectColor');
const colorList = [];
const resultMessage = document.getElementById('resultMessage');
let chosenElement = null;
let correctColor

let colorArray= ["00", "00", "00"];
const zeroPosition = Math.floor(Math.random() * 3);
// shuffleArray(colorArray);


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

elements.forEach(function (element) {
  const color = getRandomColor();
  const textBackground = element.querySelector('.element_text_bkgrnd');
  element.style.backgroundColor = color;
  if (textBackground) {
    textBackground.innerHTML = color;
  }
  colorList.push(color);
  let randomColor = colorList[Math.floor(Math.random() * colorList.length)];
  randomColor = randomColor.trim();
  selectColor.style.backgroundColor = `${randomColor}`;
  correctColor = randomColor;
});

function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  let arrayEntry = "";
  for (let i = 0; i<2; i++) {
    arrayEntry += letter[Math.floor(Math.random() * 16)];
  }
  console.log(colorArray);
  console.log(arrayEntry);
  colorArray[zeroPosition] = arrayEntry;
  color = color + colorArray.join("");
  return color
}

elements.forEach(function (element) {
  element.addEventListener('click', function () {
    chosenElement = element.querySelector('.element_text_bkgrnd').innerHTML;
      elements.forEach(function (el) {
        el.classList.remove('chosen');
      });
    element.classList.toggle('chosen');
    submitBtn.disabled = false;
    submitBtn.classList.remove('btn-light');
    submitBtn.classList.add('btn-success');
  });
});

submitBtn.addEventListener('click', function () {
  if (chosenElement === correctColor) {
    sessionStorage.setItem("result", "winner");
    window.location.href = "result.html";
  } else {
    sessionStorage.setItem("result", "loser");
    window.location.href = "result.html";
  }
});
