const displayJoke = document.getElementById("display-jokejoke");
const button = document.querySelector("getJoke");

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open("GET", url, true);

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      const response = JSON.parse(ajax.responseText);
      displayJoke.innerHTML = response.value;
    }
  };
}
