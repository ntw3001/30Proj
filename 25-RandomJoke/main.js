const displayJoke = document.getElementById("display-joke");
const button = document.querySelector("#getJoke");

console.log(displayJoke);
console.log(button);

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://icanhazdadjoke.com/";
  ajax.open("GET", url, true);
  console.log("Request sent");

  ajax.setRequestHeader("Accept", "application/json");

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
      let response = JSON.parse(ajax.responseText);
      displayJoke.innerHTML = response.joke;
    } else {
      ajax.onerror = onerror();
    }
  };
  ajax.send();
  button.innerText = "ANOTHER";
}

function onerror() {
  displayJoke.innerHTML = "[[JOKE HIDDEN]] This was too funny for you.";
}
