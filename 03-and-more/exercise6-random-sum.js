// randomSum()

// Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14

function randomSum (minimus, maximus) {
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  var number = getRandomInt(minimus, maximus)
  console.log(number)
  return number.toString().split('').reduce(function (acc, current) {
    return acc + parseInt(current)
  }, 0)
}

randomSum(1000, 9999)
