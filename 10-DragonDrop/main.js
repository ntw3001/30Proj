const dragon = document.querySelector('.dragon');

dragon.style.opacity = "1";

const shells = document.querySelectorAll('.shell');

dragon.addEventListener('dragstart', dragStart);
dragon.addEventListener('dragend', dragEnd);

function dragStart () {
  console.log('man this is gonna be a drag');
  this.className += ' hold';
  console.log(this.className);
  setTimeout(() => (this.className = ' invisible'), 0);
}

function dragEnd() {
  console.log('that was a drag');
  this.className = 'dragon';
  this.classList.toggle('dragon-hidden');
  this.style.opacity = "0";
  document.querySelector("body").style.backgroundColor = "#356";
  title.innerText = "Seek the dragon's lair";
  title.style.color = "#fff";
  for(const shell of shells) {
    shell.classList.add('seeking');
  }
}

for(const shell of shells) {
  shell.addEventListener('dragover', dragOver);
  shell.addEventListener('dragenter', dragEnter);
  shell.addEventListener('dragleave', dragLeave);
  shell.addEventListener('drop', dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'shell';
}

function dragDrop() {
  this.className = 'shell';
  this.append(dragon);
}

shells.forEach(shell => {
  shell.addEventListener('click', () => {
    const winLose = document.querySelector('.overlay');
    if(shell.childElementCount === 1) {
      dragon.style.opacity = "1";
      winLose.style.display = "block";
      winLose.innerHTML="<h2 class= 'win'>You slew the dragon. You are heroe!</h2>";
      setTimeout(() => {
        alert("Summon another dragon (you are secretly the one causing this chaos)");
        location.reload();
      }, 1000);
    } else {
      dragon.style.opacity = "1";
      winLose.style.display = "block";
      winLose.innerHTML="<h2 class= 'lose'>The dragon ambushed you and killed you with its tail</h2>";
      setTimeout(() => {
        alert("Summon a stronger hero");
        location.reload();
      }, 1000);
    }
  });
});
