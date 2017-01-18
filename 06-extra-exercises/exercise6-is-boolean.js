// isBoolean

// Define a function called isBoolean that receives a value and return true if the value received is a boolean
function isBoolean () {
  if (typeof arguments[0] === 'boolean') return true
  return false
}

isBoolean(false) // true
isBoolean('') // false
isBoolean(3) // false
isBoolean(6 === 'y') // true
