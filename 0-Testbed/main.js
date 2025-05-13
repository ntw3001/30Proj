// Map Function

const numbers = [1, 2, 3, 4, 5]
const array = numbers.map((number) => {
  return number*10
});

console.log(array);

// Player List

// const players = [
//   {jersey: 45, name: "Peach Balmo", position: "Human shield", PPG: 9.1},
//   {jersey: 33, name: "Dom Broder", position: "Best boy", PPG: 7.2},
//   {jersey: 1352, name: "Jemmeifer Benglehauer", position: "Organ donor", PPG: 3},
//   {jersey: 4, name: "Lorcus Brint", position: "Point guard", PPG: 8.6}
// ]

// const list = document.querySelector (".players")

// function populate () {
//   players.forEach(player => {
//     let template = `<li>${player.jersey}: ${player.name} - ${player.position}, PPG: ${Math.floor(player.PPG)}</li>`
//     list.insertAdjacentHTML("beforeend", template)
//   });
// }

// populate ()
