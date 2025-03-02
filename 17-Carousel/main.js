const body = document.querySelector('body');
const imgs = document.querySelectorAll('.img');

let activeImg = 0;

setImgAsBackground();

function setImgAsBackground() {
    body.style.backgroundImage = imgs[activeImg].style.backgroundImage;
}

function setActiveImg() {
  imgs.forEach((img) => {
    console.log(img);
    img.classList.remove('active');
    img.classList.remove("animateTransition");
  imgs[activeImg].classList.add('active');
  imgs[activeImg].classList.add('animateTransition');
  }
)};

const arrowBtns = document.querySelectorAll('.arrow-btn');
console.log(arrowBtns);

arrowBtns.forEach((btn) => {
  btn.onclick= () => {
    if(btn.classList.contains('right-arrow')) {
      activeImg++;
      if (activeImg >= imgs.length) {
        activeImg = 0;
      }
    }
    else {
      activeImg--;
      if (activeImg < 0) {
        activeImg = imgs.length - 1;
      }
    }
    setActiveImg();
    console.log(`set img ${activeImg}`);
    setImgAsBackground();
  }
});
