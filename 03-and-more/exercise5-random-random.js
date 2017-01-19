// randomRandom()

// Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.

function randomRandom (mininum, maximus) {
  var numberOfRandoms = getRandomInt(mininum, maximus)
  var randoms = []
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  for (var i = 1; i <= numberOfRandoms; i++) {
    randoms.push(getRandomInt(mininum, maximus))
  }
  console.log(numberOfRandoms + ' ' + randoms.join(','))
  return randoms.reduce(function (acc, current) {
    if (current > acc) acc = current
    return acc
  }, mininum)
}

randomRandom(0, 100)
