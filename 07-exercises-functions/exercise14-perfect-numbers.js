// Perfect Numbers

// Write a JavaScript function which says whether a number is perfect.

// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNumbers (numberInput) {
  var divisors = []
  for (var i = 1; i <= numberInput; i++) if (numberInput % i === 0) divisors.push(i)
  if (divisors.reduce(function (acc, element) {
    return acc + element
  }, 0) === numberInput * 2) return true
  return false
}

perfectNumbers(6) // true
perfectNumbers(28) // true
perfectNumbers(496) // true
perfectNumbers(8128) // true
perfectNumbers(50) // false
perfectNumbers(73)  // false
