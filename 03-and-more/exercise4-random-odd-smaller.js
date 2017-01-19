// randomOddSmallers()

// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)

function randomOddSmallers (limit, min, max) {
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  var random = getRandomInt(min, max)
  if (random > 40) {
    limit = (limit % 2 === 0) ? (limit + 1) : limit
    for (var i = limit; i <= random; i += 2) console.log(i)
  } else {
    for (var j = limit; j >= random; j--) console.log(j)
  }
}

randomOddSmallers(40, 0, 100)
