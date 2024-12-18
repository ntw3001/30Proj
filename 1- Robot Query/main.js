const checkbox = document.getElementById('checkbox');
const submitBtn = document.querySelector('button[type=submit]');

checkbox.disabled = true;
submitBtn.disabled = true;

const elements =  document.querySelectorAll('.element');
const selectColor = document.getElementById('selectColor');

elements.forEach(function (element) {
  const color = getRandomColor();
  const textBackground = element.querySelector('.element_text_bkgrnd');
  element.style.backgroundColor = color;
  if (textBackground) {
    textBackground.innerHTML = color;
  }
});


function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i<6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color
}
