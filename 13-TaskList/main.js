const enterBtn = document.getElementById('enter');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const item =document.querySelectorAll('li');

function inputLength() {
    return input.value.length;
}

function createListElement() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';

  function crossOut() {
      li.classList.toggle('done');
  }
  li.addEventListener('click', crossOut);
  const deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', deleteListItem);
  function deleteListItem() {
    li.classList.add('delete');
    setTimeout(function() {
      li.style.display = 'none';
    }, 500);
  }
}

enterBtn.onclick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
}

input.addEventListener('keypress', (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
});
