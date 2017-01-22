// Fibonacci Challenge

// The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

// 0, 1, 1, 2, 3, 5, 8, 13, ..

// Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.

// Hint: Use a recursive function

function fibonacciChallenge (n) {
  var fibonacciSerie = []
  function Fibonacci (elementN) {
    if (elementN === 0) return 0
    if (elementN === 1) return 1
    return Fibonacci(elementN - 1) + Fibonacci(elementN - 2)
  }
  for (var i = 0; i <= n; i++) {
    fibonacciSerie.push(Fibonacci(i))
  }
  return fibonacciSerie.toString()
}

fibonacciChallenge(5)

function fibonacciChallenge2 (n) {
  var fibonacciSerie = []
  function Fibonacci (elementN) {
    return (elementN > 1) ? Fibonacci(elementN - 1) + Fibonacci(elementN - 2) : (elementN === 1) ? 1 : 0
  }
  for (var i = 0; i <= n; i++) {
    fibonacciSerie.push(Fibonacci(i))
  }
  return fibonacciSerie.toString()
}

fibonacciChallenge2(5)

