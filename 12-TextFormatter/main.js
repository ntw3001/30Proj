const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');

inputField.addEventListener('keyup', getValue)

function getValue() {
    outputField.innerHTML = inputField.value;
}

const uppercaseBtn=document.querySelector('.uppercase');
const lowercaseBtn=document.querySelector('.lowercase');
const capitalizeBtn=document.querySelector('.capitalize');
const boldBtn=document.querySelector('.bold');
const italicBtn=document.querySelector('.italic');
const underlineBtn=document.querySelector('.underline');

uppercaseBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  lowercaseBtn.classList.remove('active')
  capitalizeBtn.classList.remove('active')
  return (outputField.innerHTML = outputField.innerHTML.toUpperCase());
});

lowercaseBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  uppercaseBtn.classList.remove('active')
  capitalizeBtn.classList.remove('active')
  return (outputField.innerHTML = outputField.innerHTML.toLowerCase());
});

capitalizeBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  uppercaseBtn.classList.remove('active')
  lowercaseBtn.classList.remove('active')
  return (outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase());
});

boldBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  return (outputField.style.fontWeight === 'bold' ? outputField.style.fontWeight = 'normal' : outputField.style.fontWeight = 'bold');
});

italicBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  return (outputField.style.fontStyle === 'italic' ? outputField.style.fontStyle = 'normal' : outputField.style.fontStyle = 'italic');
});

underlineBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active')
  return (outputField.style.textDecoration === 'underline' ? outputField.style.textDecoration = 'none' : outputField.style.textDecoration = 'underline');
});
