const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button[type=submit]');

checkbox.disabled = true;
submitBtn.disabled = true;

const elements =  document.querySelectorAll('.element');
const selectColor = document.getElementById('selectColor');
const colorList = [];
const resultMessage = document.getElementById('resultMessage');
let chosenElement = null;

elements.forEach(function (element) {
  const color = getRandomColor();
  const textBackground = element.querySelector('.element_text_bkgrnd');
  element.style.backgroundColor = color;
  if (textBackground) {
    textBackground.innerHTML = color;
  }
  colorList.push(color);
  selectColor.innerHTML = colorList[Math.floor(Math.random() * colorList.length)];
});


function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i<6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color
}

elements.forEach(function (element) {
  element.addEventListener('click', function () {
    chosenElement = element.querySelector('.element_text_bkgrnd').innerHTML;
      elements.forEach(function (el) {
        el.classList.remove('chosen');
      });
    element.classList.toggle('chosen');
    checkbox.checked = true;
    submitBtn.disabled = false;
    submitBtn.classList.remove('btn-light');
    submitBtn.classList.add('btn-success');
  });
});

submitBtn.addEventListener('click', function () {
  if (chosenElement === selectColor.innerHTML) {
    alert('You pass the test');
    location.reload(true)
  } else {
    alert('01000111 01100101 01110100 00100000 01101111 01110101 01110100 00100000 01101111 01100110 00100000 01101000 01100101 01110010 01100101 00100000 01100011 01101100 01100001 01101110 01101011 01100010 01100001 01100111');
    location.reload(true)
  }
});
