// Map Function

const select = document.querySelector("select")

const paintings = [
  {name: "Peach Balmo", width: 200, height: 400},
  {name: "Foot", width: 300, height: 200},
  {name: "Murder at the Parade", width: 600, height: 300},
];

const array = paintings.map((painting) => {
  return `The painting known as ${painting.name} is sized at ${painting.width} x ${painting.height}`
})

select.insertAdjacentHTML("afterbegin", `<option>${array[0]}</option>,
  <option>${array[1]}</option>, <option>${array[2]}</option>`
);

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
