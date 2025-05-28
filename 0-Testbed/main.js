const container = document.querySelector(".container");
const select = document.querySelector("select")

// Destructuring

// const user = {
//   name: "Framcos",
//   lastName: "Benglehauer",
//   age: 20,
// };

// // let name = user.name;
// // let lastName = user.lastName;
// // let age = user.age;

// const {name, lastName, age} = user;
// container.innerHTML = `<h2>My name is ${name} ${lastName} and I am ${age} years old</h2>`;

// Classes. 0.1

// class Pokemon {
//   constructor (name, type)
//     {
//     this.name = name;
//     this.type = type;
//     this.cry = `${this.name} ${this.name}!`;
//     }

//   move() {
//     if (this.type === "Electric") {
//         return "thundershock";
//     } else if (this.type === "Fire") {
//       return "ember";
//     } else if (this.type === "Water") {
//       return "water gun";
//     } else {
//       return "tackle";
//     }
//   }
//   attack() {
//     container.innerText = `${this.cry}, ${this.name} cried, striking its foe down with a brutal ${this.move()}`;
//   };
// }

// const chooseYou = new Pokemon("Gus", "Water")

// chooseYou.attack();

// Classes 0

// function Pokemon(name, type)
// {
//   this.name = name;
//   this.type = type;
//   this.cry = `${this.name} ${this.name}!`;
//   this.move = function() {
//     if (this.type === "Electric") {
  //     return "thundershock";
  //   } else if (this.type === "Fire") {
  //     return "ember";
  //   } else if (this.type === "Water") {
  //     return "water gun";
  //   } else {
  //     return "tackle";
  //   }
  // }
// }

// Pokemon.prototype.attack = function() {
//   container.innerText = `${this.cry}, ${this.name} cried, striking its foe down with a brutal ${this.move()}`;
// }

// const chooseYou = new Pokemon("Gus", "Water")

// chooseYou.attack();

// Rest and Spread Operator 2

// function showItems(arg1, ...args){
//   let arr = [...args, ...arg1];
//   console.log(arr);
// }

// showItems(["dogs", "cats"], "turtles", "fish");


// Rest and Spread Operator 1

// const totalDistance = (...array) => {
//   const distances = array;
//   let total = 0;
//   distances.forEach((distance)=> {
//     total += distance;
//   });
//   return total;
// };

// console.log(totalDistance(1554, 4132, 5434, 432, 543, 1102))

// Default Arguments 1

// function greeting(name = "user"){
//   return `Hello ${name}, welcome`;
// }

// console.log(greeting())

// Object Literals 2

// const createObject = ((name, lastName, age) => {
//   return {name, lastName, age}
// });

// console.log(createObject("Framcos","Benglehauer", 20));

// Object Literals 1

// const createHero = (name, power) => {
//   return {
//     name: name,
//     power: power,
//     gatherAllies: () => {
//       return `${this.name} is gathering allies with the power of ${this.power}`;
//     }
//   }
// };

// const character = createHero("Peach Balmo", "Charm");

// console.log(character.gatherAllies());

// Fat Arrow Function 2

// const names = ["James", "Tom", "Lisa", "Domy"];

// let randomName = (array) => {
//   console.log(array);
//   return array[Math.floor(Math.random() * array.length)];
// }

// let randomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(`My name is ${randomName(names)} and I\'m here to say, I\'m ${randomNumber(1, 100)} years old, hey`);

// Fat Arrow Function 1

// const value = function(name, age){
//   return `My name is ${name} and I'm here to say: I am ${age} years old, hey`;
// }

// console.log(value("Peach Balmo", 20));

// ForOf Helper

// const names = ["Thumbs", "Dorg", "Lalth"]

// for (let name of names) {
//   console.log(name);
// };

// Reduce Helper 2

// const compluters = [
//   {type: "Laptop", os: "Winders", prince: 3},
//   {type: "Desktop", os: "Linux", prince: 4},
//   {type: "Desktop", os: "Winders", prince: 6},
//   {type: "Laptop", os: "Linux", prince: 7},
//   {type: "Laptop", os: "Winders", prince: 9},
//   {type: "Desktop", os: "Linux", prince: 10},
// ];

// const sorted = compluters.reduce(([Winders, Linux], compluter) => {
//   if (compluter.os==="Winders") {
//     Winders.push(compluter);
//   }
//   else {
//     Linux.push(compluter);
//   }
//   return [Winders, Linux]
// }, [[], []])

// windersCount = sorted[0].length
// LinuxCount = sorted[1].length

// container.innerHTML = `<h2>There are ${windersCount} Winders computers and ${LinuxCount} Linux computers</h2>`;

// Reduce Helper 1

// const trips = [
//   {to: "Paris", distance: 2000},
//   {to: "London", distance: 3000},
//   {to: "New York", distance: 4000},
// ];

// const totalDistance = trips.reduce((total, trip) => {
//   total += trip.distance;
//   return total;
// },0);

// console.log(totalDistance);

// Reduce Helper

// const users = [
// {firstName: "Peach", lastName: "Balmo", age: 20},
// {firstName: "Dom", lastName: "Broder", age: 21},
// {firstName: "Jemmeifer", lastName: "Benglehauer", age: 22},
// {firstName: "Lorcus", lastName: "Brint", age: 23},
// ]

// const name = users.reduce((start, user) => {
//   start.push(user.firstName)
//   return start
// },[])

// console.log(name);

// Find Function 1

// const cars= [
//   {brand: "ford", type: "Sports Car", price: "200", available: 2},
//   {brand: "toyota", type: "SUV", price: "300", available: 5},
//   {brand: "honda", type: "Sedan", price: "400", available: 0},
//   {brand: "chevrolet", type: "Truck", price: "500", available: 1},
//   {brand: "nissan", type: "Hatchback", price: "600", available: 3},
//   {brand: "jeep", type: "SUV", price: "700", available: 4},
//   {brand: "subaru", type: "SUV", price: "800", available: 2},
//   {brand: "mercedes", type: "Luxury", price: "900", available: 1},
//   {brand: "audi", type: "Luxury", price: "1000", available: 0},
//   {brand: "bmw", type: "Luxury", price: "1100", available: 3},
//   {brand: "volkswagen", type: "Hatchback", price: "1200", available: 4},
//   {brand: "hyundai", type: "Sedan", price: "1300", available: 2},
//   {brand: "kia", type: "SUV", price: "1400", available: 1},
//   {brand: "fiat", type: "Hatchback", price: "1500", available: 0},
//   {brand: "porsche", type: "Sports Car", price: "1600", available: 3},
//   {brand: "tesla", type: "Electric", price: "1700", available: 4},
//   {brand: "volvo", type: "Luxury", price: "1800", available: 2},
//   {brand: "jaguar", type: "Luxury", price: "1900", available: 1},
//   {brand: "land rover", type: "Luxury", price: "2000", available: 0},
//   {brand: "ferrari", type: "Sports Car", price: "2100", available: 3},
//   {brand: "lamborghini", type: "Sports Car", price: "2200", available: 4},
// ];

// function getResults(price, type) {
//   return cars.find(function(car) {
//     return car.price <= price && car.type === type && car.available > 0;
//   })
// };

// document.querySelector(".search").addEventListener("click", function() {
//   console.log("clicked");
//   let price = parseInt(document.querySelector("#price").value);
//   let type = document.querySelector("#type").value;

//   let results = getResults(price, type);

//   if(results) {
//     container.innerHTML = `<h2>You can have a ${results.brand} ${results.type} for $${results.price}</h2>`;
//   }
//   else {
//     container.innerHTML = `<h2>No cars for you, go and have a bicycule</h2>`;
//   }
// });

// Filter Function 2

// const channels = [
//   {name: "HBO", premium: true},
//   {name: "ESPN", premium: true},
//   {name: "CNN", premium: false},
//   {name: "NBC", premium: false},
//   {name: "ABC", premium: false},
// ];

// const user = {
//   name: "Framcos",
//   premium: true,
//   premiumChannels: function(){
//     return channels.filter(channels => channels.premium)
//   },
//   nonPremiumChannels: function(){
//     return channels.filter(channels => !channels.premium)
//   }
// }

// console.log
// console.log(user.premiumChannels());
// console.log(user.nonPremiumChannels());

// Filter Functon 1

// const pokemon = [
//   {name: "Raichu", type: "Electric", evolution: "3rd"},
//   {name: "Onix", type: "Rock", evolution: "1st"},
//   {name: "Gyarados", type: "Water", evolution: "2nd"},
//   {name: "Pidgey", type: "Flying", evolution: "1st"},
//   {name: "Pidgeotto", type: "Flying", evolution: "2nd"},
//   {name: "Pidgeot", type: "Flying", evolution: "3rd"},
//   {name: "Pikachu", type: "Electric", evolution: "2nd"},
//   {name: "Charizard", type: "Fire", evolution: "3rd"},
//   {name: "Charmeleon", type: "Fire", evolution: "2nd"},
//   {name: "Charmander", type: "Fire", evolution: "1st"},
//   {name: "Squirtle", type: "Water", evolution: "1st"},
//   {name: "Wartortle", type: "Water", evolution: "2nd"},
//   {name: "Blastoise", type: "Water", evolution: "3rd"},
//   {name: "Bulbasaur", type: "Grass", evolution: "1st"},
//   {name: "Ivysaur", type: "Grass", evolution: "2nd"},
//   {name: "Venusaur", type: "Grass", evolution: "3rd"},
//   {name: "Butterfree", type: "Bug", evolution: "3rd"},
//   {name: "Metapod", type: "Bug", evolution: "2nd"},
//   {name: "Caterpie", type: "Bug", evolution: "1st"},
//   {name: "Beedrill", type: "Bug", evolution: "3rd"},
//   {name: "Kakuna", type: "Bug", evolution: "2nd"},
//   {name: "Weedle", type: "Bug", evolution: "1st"},
//   {name: "Nidoking", type: "Poison", evolution: "3rd"},
//   {name: "Nidorino", type: "Poison", evolution: "2nd"},
//   {name: "Nidoran\u2642", type: "Poison", evolution: "1st"},
//   {name: "Nidoran\u2640", type: "Poison", evolution: "1st"},
//   {name: "Nidoqueen", type: "Poison", evolution: "3rd"},
//   {name: "Nidorina", type: "Poison", evolution: "2nd"},
//   {name: "Jigglypuff", type: "Normal", evolution: "1st"},
//   {name: "Wigglytuff", type: "Normal", evolution: "2nd"},
//   {name: "Zubat", type: "Poison", evolution: "1st"},
//   {name: "Golbat", type: "Poison", evolution: "2nd"},
//   {name: "Psyduck", type: "Water", evolution: "1st"},
//   {name: "Golduck", type: "Water", evolution: "2nd"},
//   {name: "Poliwag", type: "Water", evolution: "1st"},
//   {name: "Poliwhirl", type: "Water", evolution: "2nd"},
//   {name: "Poliwrath", type: "Water", evolution: "3rd"},
//   {name: "Machop", type: "Fighting", evolution: "1st"},
//   {name: "Machoke", type: "Fighting", evolution: "2nd"},
//   {name: "Machamp", type: "Fighting", evolution: "3rd"},
//   {name: "Bellsprout", type: "Grass", evolution: "1st"},
//   {name: "Weepinbell", type: "Grass", evolution: "2nd"},
//   {name: "Victreebel", type: "Grass", evolution: "3rd"},
//   {name: "Tentacool", type: "Water", evolution: "1st"},
//   {name: "Tentacruel", type: "Water", evolution: "2nd"},
//   {name: "Porygon", type: "Normal", evolution: "1st"},
//   {name: "Snorlax", type: "Normal", evolution: "3rd"},
//   {name: "Lapras", type: "Water", evolution: "3rd"},
//   {name: "Ditto", type: "Normal", evolution: "1st"},
//   {name: "Eevee", type: "Normal", evolution: "1st"},
//   {name: "Vaporeon", type: "Water", evolution: "2nd"},
//   {name: "Jolteon", type: "Electric", evolution: "2nd"},
//   {name: "Flareon", type: "Fire", evolution: "2nd"},
//   {name: "Mew", type: "Psychic", evolution: "1st"},
//   {name: "Mewtwo", type: "Psychic", evolution: "3rd"},
//   {name: "Kabuto", type: "Rock", evolution: "1st"},
//   {name: "Kabutops", type: "Rock", evolution: "2nd"},
//   {name: "Omanyte", type: "Rock", evolution: "1st"},
//   {name: "Omastar", type: "Rock", evolution: "2nd"},
//   {name: "Aerodactyl", type: "Rock", evolution: "3rd"},
//   {name: "Articuno", type: "Ice", evolution: "3rd"},
//   {name: "Zapdos", type: "Electric", evolution: "3rd"},
//   {name: "Moltres", type: "Fire", evolution: "3rd"},
//   {name: "Dragonite", type: "Dragon", evolution: "3rd"},
//   {name: "Dratini", type: "Dragon", evolution: "1st"},
//   {name: "Dragonair", type: "Dragon", evolution: "2nd"},
//   {name: "Golem", type: "Rock", evolution: "3rd"},
//   {name: "Graveler", type: "Rock", evolution: "2nd"},
//   {name: "Geodude", type: "Rock", evolution: "1st"},
//   {name: "Hitmonlee", type: "Fighting", evolution: "1st"},
//   {name: "Hitmonchan", type: "Fighting", evolution: "1st"},
//   {name: "Scyther", type: "Bug", evolution: "1st"},
//   {name: "Jynx", type: "Ice", evolution: "2nd"},
//   {name: "Electabuzz", type: "Electric", evolution: "1st"},
//   {name: "Magmar", type: "Fire", evolution: "1st"},
//   {name: "Pinsir", type: "Bug", evolution: "1st"},
//   {name: "Tauros", type: "Normal", evolution: "1st"},
//   {name: "Magikarp", type: "Water", evolution: "1st"},
//   {name: "Chansey", type: "Normal", evolution: "2nd"},
//   {name: "Kangaskhan", type: "Normal", evolution: "1st"},
//   {name: "Horsea", type: "Water", evolution: "1st"},
//   {name: "Seadra", type: "Water", evolution: "2nd"},
//   {name: "Seaking", type: "Water", evolution: "2nd"},
//   {name: "Goldeen", type: "Water", evolution: "1st"},
//   {name: "Staryu", type: "Water", evolution: "1st"},
//   {name: "Starmie", type: "Water", evolution: "2nd"},
//   {name: "Magneton", type: "Electric", evolution: "2nd"},
//   {name: "Electrode", type: "Electric", evolution: "2nd"},
//   {name: "Voltorb", type: "Electric", evolution: "1st"},
//   {name: "Magnemite", type: "Electric", evolution: "1st"},
//   {name: "Farfetch'd", type: "Normal", evolution: "1st"},
//   {name: "Doduo", type: "Flying", evolution: "1st"},
//   {name: "Dodrio", type: "Flying", evolution: "2nd"},
//   {name: "Seel", type: "Water", evolution: "1st"},
//   {name: "Dewgong", type: "Water", evolution: "2nd"},
//   {name: "Shellder", type: "Water", evolution: "1st"},
//   {name: "Cloyster", type: "Water", evolution: "2nd"},
//   {name: "Krabby", type: "Water", evolution: "1st"},
//   {name: "Kingler", type: "Water", evolution: "2nd"},
//   {name: "Exeggcute", type: "Grass", evolution: "1st"},
//   {name: "Exeggutor", type: "Grass", evolution: "2nd"},
//   {name: "Cubone", type: "Ground", evolution: "1st"},
//   {name: "Marowak", type: "Ground", evolution: "2nd"},
//   {name: "Rattata", type: "Normal", evolution: "1st"},
//   {name: "Raticate", type: "Normal", evolution: "2nd"},
//   {name: "Sandshrew", type: "Ground", evolution: "1st"},
//   {name: "Sandslash", type: "Ground", evolution: "2nd"},
//   {name: "Diglett", type: "Ground", evolution: "1st"},
//   {name: "Dugtrio", type: "Ground", evolution: "2nd"},
//   {name: "Meowth", type: "Normal", evolution: "1st"},
//   {name: "Persian", type: "Normal", evolution: "2nd"},
//   {name: "Gastly", type: "Ghost", evolution: "1st"},
//   {name: "Haunter", type: "Ghost", evolution: "2nd"},
//   {name: "Gengar", type: "Ghost", evolution: "3rd"},
//   {name: "Growlithe", type: "Fire", evolution: "1st"},
//   {name: "Arcanine", type: "Fire", evolution: "2nd"},
//   {name: "Vulpix", type: "Fire", evolution: "1st"},
//   {name: "Ninetales", type: "Fire", evolution: "2nd"},
//   {name: "Spearow", type: "Flying", evolution: "1st"},
//   {name: "Fearow", type: "Flying", evolution: "2nd"},
//   {name: "Clefairy", type: "Normal", evolution: "1st"},
//   {name: "Clefable", type: "Normal", evolution: "2nd"},
//   {name: "Mr. Mime", type: "Psychic", evolution: "1st"},
//   {name: "Drowzee", type: "Psychic", evolution: "1st"},
//   {name: "Hypno", type: "Psychic", evolution: "2nd"},
//   {name: "Abra", type: "Psychic", evolution: "1st"},
//   {name: "Kadabra", type: "Psychic", evolution: "2nd"},
//   {name: "Alakazam", type: "Psychic", evolution: "3rd"},
//   {name: "Tangela", type: "Grass", evolution: "1st"},
//   {name: "Grimer", type: "Poison", evolution: "1st"},
//   {name: "Muk", type: "Poison", evolution: "2nd"},
//   {name: "Koffing", type: "Poison", evolution: "1st"},
//   {name: "Weezing", type: "Poison", evolution: "2nd"},
//   {name: "Oddish", type: "Grass", evolution: "1st"},
//   {name: "Gloom", type: "Grass", evolution: "2nd"},
//   {name: "Vileplume", type: "Grass", evolution: "3rd"},
//   {name: "Paras", type: "Bug", evolution: "1st"},
//   {name: "Parasect", type: "Bug", evolution: "2nd"},
//   {name: "Mankey", type: "Fighting", evolution: "1st"},
//   {name: "Primeape", type: "Fighting", evolution: "2nd"},
//   {name: "Ponyta", type: "Fire", evolution: "1st"},
//   {name: "Rapidash", type: "Fire", evolution: "2nd"},
//   {name: "Ekans", type: "Poison", evolution: "1st"},
//   {name: "Arbok", type: "Poison", evolution: "2nd"},
//   {name: "Rhyhorn", type: "Ground", evolution: "1st"},
//   {name: "Rhydon", type: "Ground", evolution: "2nd"},
//   {name: "Venonat", type: "Bug", evolution: "1st"},
//   {name: "Venomoth", type: "Bug", evolution: "2nd"},
//   {name: "Slowpoke", type: "Water", evolution: "1st"},
//   {name: "Slowbro", type: "Water", evolution: "2nd"},
//   {name: "Lickitung", type: "Normal", evolution: "1st"},


// ]

// const fire = pokemon.filter((poke) => {
//   return poke.type === "Fire"
// })
// const water = pokemon.filter((poke) => {
//   return poke.type === "Water"
// })
// const grass = pokemon.filter((poke) => {
//   return poke.type === "Grass"
// })
// const electric = pokemon.filter((poke) => {
//   return poke.type === "Electric"
// })
// const bug = pokemon.filter((poke) => {
//   return poke.type === "Bug"
// })
// const poison = pokemon.filter((poke) => {
//   return poke.type === "Poison"
// })
// const rock = pokemon.filter((poke) => {
//   return poke.type === "Rock"
// })
// const ghost = pokemon.filter((poke) => {
//   return poke.type === "Ghost"
// })
// const normal = pokemon.filter((poke) => {
//   return poke.type === "Normal"
// })
// const fighting = pokemon.filter((poke) => {
//   return poke.type === "Fighting"
// })
// const psychic = pokemon.filter((poke) => {
//   return poke.type === "Psychic"
// })
// const flying = pokemon.filter((poke) => {
//   return poke.type === "Flying"
// })
// const ice = pokemon.filter((poke) => {
//   return poke.type === "Ice"
// })
// const ground = pokemon.filter((poke) => {
//   return poke.type === "Ground"
// })
// const dragon = pokemon.filter((poke) => {
//   return poke.type === "Dragon"
// })

// function filter (array) {
//   array.forEach(poke => {
//     let template = `<li>${poke.name} (${poke.evolution} evolution)</li>`
//     container.insertAdjacentHTML("beforeend", template)
//   });
// }

// const type = [
//   "Select a type",
//   "fire",
//   "water",
//   "grass",
//   "electric",
//   "bug",
//   "poison",
//   "rock",
//   "ghost",
//   "normal",
//   "fighting",
//   "psychic",
//   "flying",
//   "ice",
//   "ground",
//   "dragon"
// ];

// select.insertAdjacentHTML("afterbegin", `<option value="select">${type[0]}</option> <option value="fire">${type[1]}</option>, <option value="water">${type[2]}</option>, <option value="grass">${type[3]}</option>, <option value="electric">${type[4]}</option>, <option value="bug">${type[5]}</option>, <option value="poison">${type[6]}</option>, <option value="rock">${type[7]}</option>, <option value="ghost">${type[8]}</option>, <option value="normal">${type[9]}</option>, <option value="fighting">${type[10]}</option>, <option value="psychic">${type[11]}</option>, <option value="flying">${type[12]}</option>, <option value="ice">${type[13]}</option>, <option value="ground">${type[14]}</option>, <option value="dragon">${type[15]}</option>`)

// select.addEventListener("change", (e) => {
//   container.innerHTML = ""
//   switch (e.target.value) {
//     case "fire":
//       filter(fire)
//       break;
//     case "water":
//       filter(water)
//       break;
//     case "grass":
//       filter(grass)
//       break;
//     case "electric":
//       filter(electric)
//       break;
//     case "bug":
//       filter(bug)
//       break;
//     case "poison":
//       filter(poison)
//       break;
//     case "rock":
//       filter(rock)
//       break;
//     case "ghost":
//       filter(ghost)
//       break;
//     case "normal":
//       filter(normal)
//       break;
//     case "fighting":
//       filter(fighting)
//       break;
//     case "psychic":
//       filter(psychic)
//       break;
//     case "flying":
//       filter(flying)
//       break;
//     case "ice":
//       filter(ice)
//       break;
//     case "ground":
//       filter(ground)
//       break;
//     case "dragon":
//       filter(dragon)
//   }
// })

// Map Function 2

// const container = document.querySelector(".container");
// const cars = [
//   {make: "Toyota", price: 20000},
//   {make: "Honda", price: 25000},
//   {make: "Ford", price: 30000},
//   {make: "Chevrolet", price: 28000},
// ];

// const array = cars.map((car) => {
//   return ` The ${car.make} costs $${car.price}`;
// });

// container.innerHTML = `<ul>
//   <li>${array[0]}</li>
//   <li>${array[1]}</li>
//   <li>${array[2]}</li>
//   <li>${array[3]}</li>
// </ul>`;

// Map Function 1

// const select = document.querySelector("select")

// const paintings = [
//   {name: "Peach Balmo", width: 200, height: 400},
//   {name: "Foot", width: 300, height: 200},
//   {name: "Murder at the Parade", width: 600, height: 300},
// ];

// const array = paintings.map((painting) => {
//   return `The painting known as ${painting.name} is sized at ${painting.width} x ${painting.height}`
// })

// select.insertAdjacentHTML("afterbegin", `<option>${array[0]}</option>,
//   <option>${array[1]}</option>, <option>${array[2]}</option>`
// );

// console.log(array);

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
