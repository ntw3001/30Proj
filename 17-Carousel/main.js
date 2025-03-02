const body = document.querySelector('body');
const imgs = document.querySelectorAll('.img');

let activeImg = 0;

setImgAsBackground();
setActiveImg("Right");

function setImgAsBackground() {
    body.style.backgroundImage = imgs[activeImg].style.backgroundImage;
}

function setActiveImg(direction) {
  imgs.forEach((img) => {
    img.classList.remove('active');
    img.classList.remove("animateTransitionLeft");
    img.classList.remove("animateTransitionRight");
  });
  imgs[activeImg].classList.add('active');
  imgs[activeImg].classList.add(`animateTransition${direction}`);
  console.log(imgs);
}

const arrowBtns = document.querySelectorAll('.arrow-btn');

arrowBtns.forEach((btn) => {
  btn.onclick= () => {
    if(btn.classList.contains('right-arrow')) {
      direction = 'Right';
      activeImg++;
      if (activeImg >= imgs.length) {
        activeImg = 0;
      }
    }
    else {
      direction = 'Left';
      activeImg--;
      if (activeImg < 0) {
        activeImg = imgs.length - 1;
      }
    }
    setActiveImg(direction);
    console.log(`set img ${activeImg}`);
    setImgAsBackground();
  }
});
