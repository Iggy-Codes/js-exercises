// maxOfThree() function

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// you can write as many number you want
function maxOfNumbers () {
  var nLargest
  if (arguments.length === 0) return 'error'
  nLargest = arguments[0]
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > nLargest) nLargest = arguments[i]
  }
  return nLargest
}

maxOfNumbers(10, 1000, 100)

maxOfNumbers(50, 6, 18, 29, 45)
