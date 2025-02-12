const enterBtn = document.getElementById('enter');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const item = document.querySelectorAll('li');

function inputLength() {
    return input.value.length;
}

function createListElement() {

  function addListItem() {
    const li = document.createElement('li');
    li.prepend(document.createTextNode(input.value));
    ul.prepend(li);
    requestAnimationFrame(() => {
      li.classList.add("newitem");
    });
    input.value = '';

    function crossOut() {
      li.classList.toggle('done');
    }
    li.addEventListener('click', crossOut);
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    setTimeout(() => {
      li.classList.remove("newitem");
    }, 500);

    deleteBtn.addEventListener('click', deleteListItem);
    function deleteListItem() {
      li.classList.add('delete');
      const itemsBelow = Array.from(ul.children).slice(Array.from(ul.children).indexOf(li) + 1);

      itemsBelow.forEach(item => {
        item.classList.add("limove-reverse");
        setTimeout(() => {
          item.classList.remove("limove-reverse");
        }, 500);
      });

      setTimeout(() => {
        li.remove();
      }, 500);
    };
  }

  function liMove() {
    ul.classList.add('limove');
    setTimeout(function() {
      ul.classList.remove('limove');
      addListItem();
    }, 500);
    }
    liMove();
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
