// Calculator

// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

function calculator (operation, num1, num2) {
  var nResult
  switch (operation) {
    case 'suma':
      nResult = num1 + num2
      break
    case 'resta':
      nResult = num1 - num2
      break
    case 'multiplicacion':
      nResult = num1 * num2
      break
    case 'division':
      nResult = num1 / num2
      break
    default:
      nResult = 'Error. Operation not defined'
  }
  return nResult
}

calculator('suma', 10, 5) // 15
calculator('resta', 10, 5) // 5
calculator('multiplicacion', 10, 5) // 50
calculator('division', 10, 5) // 2
