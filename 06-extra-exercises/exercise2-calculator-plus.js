// Calculator Plus

// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters
function calculator () {
  var nResult = arguments[1]
  switch (arguments[0]) {
    case 'suma':
      for (var i = 2; i < arguments.length; i++) {
        nResult += arguments[i]
      }
      break
    case 'resta':
      for (var i = 2; i < arguments.length; i++) {
        nResult -= arguments[i]
      }
      break
    case 'multiplicacion':
      for (var i = 2; i < arguments.length; i++) {
        nResult *= arguments[i]
      }
      break
    case 'division':
      for (var i = 2; i < arguments.length; i++) {
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
