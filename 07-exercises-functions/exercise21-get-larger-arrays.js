// 21 getLargerArrays

// Write a JavaScript function that returns array elements larger than a number.

function getLargerArrays (arrayToCompare, value) {
  return arrayToCompare.filter(function (current) {
    return current > value
  })
}

getLargerArrays([12, 20, 14, 38, 45, 11, 5, 18, 21], 20)
