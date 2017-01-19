// randomSmallest()

// Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.

function randomSmallest (minimum, maximum) {
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  var number1 = getRandomInt(minimum, maximum)
  var number2 = getRandomInt(minimum, maximum)
  console.log('Number1: ' + number1 + '\nNumber2: ' + number2)
  var numberSmall = Math.min(number1, number2)
  for (var i = numberSmall; i > 1; i--) {
    if ((number1 % i === 0) && (number2 % i === 0)) return i
  }
}

randomSmallest(0, 20)
