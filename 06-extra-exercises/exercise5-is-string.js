// isString

// Define a function called isString that receives a value and return true if the value received is a string
function isString () {
  if (typeof arguments[0] === 'string') return true
  return false
}

isString(3) // false
isString('3') // true
isString('asass') // true
