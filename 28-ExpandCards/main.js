const cards = document.querySelectorAll('.card-container');
const cardTitle = document.querySelector('.card-title');

// cardTitle.style.opacity = 0

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((c) => {
      c.classList.remove('active');
      c.childNodes[3].style.opacity = 0;
    });
    card.classList.add('active');
    console.log(card.childNodes);
    card.childNodes[3].style.opacity = 1;
  });
});
