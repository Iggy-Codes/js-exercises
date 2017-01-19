// randomOne()

// Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5

function randomOne (minimus, maximus) {
  var number = getRandomInt(minimus, maximus)
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function sumDigits (number) {
    return number.toString().split('').reduce(function (acc, current) {
      return acc + parseInt(current)
    }, 0)
  }
  console.log('Aletory number is: ' + number)
  do {
    number = sumDigits(number)
    console.log('Sum is ' + number)
    console.log()
  } while (number > 10)
  return number
}

randomOne(1000, 9999)
