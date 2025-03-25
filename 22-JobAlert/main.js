const getJob = document.getElementById('getJob');
const slideBtns = document.querySelectorAll('.btn');
const containers = document.querySelectorAll('.container');

getJob.addEventListener('click', function () {
    containers.forEach(function (container) {
        container.style.display = "grid";
    });
  getJob.style.display = "none";
});



slideBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const input = e.target.nextElementSibling;

      btn.disabled = true;

      function slide () {
        // setTimeout (function () {
          if (input.classList.contains('slide-in')) {
            input.classList.remove('slide-in');
            input.classList.add('slide-out');

            setTimeout (function () {
            e.target.style.borderRadius="50%";
            e.target.style.background="#f18d38";
            }, 500);
          } else {
            e.target.style.borderRadius="50% 0 0 50%";
            e.target.style.background="#6e46ae";

            setTimeout (function () {
            input.classList.remove('slide-out');
            input.classList.add('slide-in');
            }, 250);
          }
        // }, 500);
      }

      slide();

      setTimeout(() => {
        btn.disabled = false;
      }, 500);

  });
});
