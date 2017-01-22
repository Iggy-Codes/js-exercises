// String Calculator

// Define a function called add with a single argument input. The input to the function will be a string containing a comma-separated list of numbers. The function must return the sum of the numbers. e.g.

function add () {
  return Array.prototype.reduce.call(arguments, function (acc, current) {
    return acc + current
  }, 0)
}

add(1, 2, 3, 4) // => 10
