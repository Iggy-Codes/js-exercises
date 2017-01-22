// What type

// Write a JavaScript function which accepts an argument and returns the type Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function whatType () {
  return typeof arguments[0]
}

whatType({}) // object
whatType(true) // boolean
whatType('a') // string
whatType(-9.8) // number
whatType(function () {}) // function
whatType() // undefined
