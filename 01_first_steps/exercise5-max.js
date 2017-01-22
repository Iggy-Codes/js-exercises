// max() function

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max (number1, number2) {
  if (number1 >= number2) return number1
  else return number2
}

max(20, 40)

function max2 (number1, number2) {
  return Math.max(number1, number2)
}

max2(20, 40)
