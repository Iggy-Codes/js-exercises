// Multiplications table on demand

// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function multiplicationOnDemand (number) {
  var sRowOut = 'Multiplication table on demand. Number: ' + number + '\n'
  for (var i = 1; i <= 10; i++) {
    sRowOut += (number * i) + '\n'
  }
  console.log(sRowOut)
}

multiplicationOnDemand(5)
