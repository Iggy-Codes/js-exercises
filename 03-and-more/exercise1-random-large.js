// randomLargest()

// Randomizes three numbers in range (0.. 100) and prints the largest one.

function ramdomLargest (nNumbers, min, max) {
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  var numbers = []
  for (var i = 1; i <= nNumbers; i++) {
    numbers.push(getRandomInt(min, max))
  }
  console.log(numbers)
  return numbers.reduce(function (acc, current) {
    if (current > acc) acc = current
    return acc
  })
}

ramdomLargest(3, 0, 100)
