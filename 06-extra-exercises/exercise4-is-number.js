// isNumber

// Define a function called isNumber that receives a value and return true if the value received is a number

function isNumber (inputToCheck) {
  if (typeof inputToCheck === 'number') return true
  return false
}

isNumber(3) // true
isNumber('3') // false
isNumber('asass') // false

