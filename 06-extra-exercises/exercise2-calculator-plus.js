// Calculator Plus

// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

// Traditional way

function calculator () {
  var nResult = arguments[1]
  switch (arguments[0]) {
    case 'suma':
      for (var i = 2; i < arguments.length; i++) {
        nResult += arguments[i]
      }
      break
    case 'resta':
      for (var j = 2; j < arguments.length; j++) {
        nResult -= arguments[i]
      }
      break
    case 'multiplicacion':
      for (var k = 2; k < arguments.length; k++) {
        nResult *= arguments[i]
      }
      break
    case 'division':
      for (var l = 2; l < arguments.length; l++) {
        nResult /= arguments[i]
      }
      break
    default:
      nResult = 'Error. Operation not defined'
  }
  return nResult
}

calculator('suma', 10, 5, 2, 3) // 20
calculator('resta', 10, 5, 1) // 4
calculator('multiplicacion', 10, 5, 2) // 100
calculator('division', 10, 5) // 2

// Using Array methods as Higher Order Function

function calculator2 () {
  this.suma = function (acc, current) { // eslint-disable-line no-unused-vars
    acc += current
    return acc
  }

  this.resta = function (acc, current) { // eslint-disable-line no-unused-vars
    acc -= current
    return acc
  }

  this.multiplicacion = function (acc, current) { // eslint-disable-line no-unused-vars
    acc *= current
    return acc
  }

  this.division = function (acc, current) { // eslint-disable-line no-unused-vars
    acc /= current
    return acc
  }
  var args = Array.prototype.slice.call(arguments)
  var operation = args.shift()
  var acumulator = args.shift()
  return args.reduce(this[operation], acumulator)
}

calculator2('suma', 10, 5, 2, 3) // 20
calculator2('resta', 10, 5, 1) // 4
calculator2('multiplicacion', 10, 5, 2) // 100
calculator2('division', 10, 5) // 2
