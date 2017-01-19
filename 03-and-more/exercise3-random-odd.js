// randomOdd()

// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed

function randomOdd (from, min, max) {
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  from = (from % 2 === 0) ? (from + 1) : from
  for (var i = from; i <= getRandomInt(min, max); i += 2) console.log(i)
}

randomOdd(40, 0, 100)
