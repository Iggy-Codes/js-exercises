// sum() & multiply()

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum (aInput) {
  var total = 0
  for (var i = 0; i < aInput.length; i++) {
    total += aInput[i]
  }
  return total
}

sum([1, 2, 3, 4]) // 10

function sum2 (aInput) {
  return aInput.reduce(function (acc, current) {
    acc += current
    return acc
  }, 0)
}

sum2([1, 2, 3, 4]) // 10

function multiply (aInput) {
  var total = 1
  for (var i = 0; i < aInput.length; i++) {
    total *= aInput[i]
  }
  return total
}

multiply([1, 2, 3, 4]) // 24

function multiply2 (aInput) {
  return aInput.reduce(function (acc, element) {
    acc *= element
    return acc
  }, 1)
}

multiply2([1, 2, 3, 4]) // 24
