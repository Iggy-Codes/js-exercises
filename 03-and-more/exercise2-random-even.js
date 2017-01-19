// randomEven()

// Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.

function randomEven (min, max) {
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  for (var i = 0; i <= getRandomInt(min, max); i += 2) console.log(i)
}

randomEven(0, 100)
