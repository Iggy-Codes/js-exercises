// Factors

// Write a JavaScript function to compute the factors of a positive integer.

function factor (number) {
  var output = {}
  while (number > 1) {
    var i = 2
    var found = false
    while (!found) {
      if (number % i === 0) {
        (output[i] === undefined) ? (output[i] = 1) : output[i]++
        number /= i
        found = true
      } else i++
    }
  }
  return output
}

factor(90)

function numberFromFactors (factors) {
  var number = 1
  for (var prop in factors) {
    number *= Math.pow(prop, factors[prop])
  }
  return number
}

numberFromFactors(factor(90))
