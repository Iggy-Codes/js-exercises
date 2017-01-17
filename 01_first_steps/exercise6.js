// maxOfThree() function

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// it works for any group of numbers
function maxOfNumbers () {
  var nLargest
  if (arguments.length === 0) return 'error'
  nLargest = arguments[0]
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > nLargest) nLargest = arguments[i]
  }
  return nLargest
}
