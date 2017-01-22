// String combinations

// Write a JavaScript function that generates all combinations of a string

// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function stringCombinations (stringInput) {
  var combinations = []
  for (var i = 0; i < stringInput.length; i++) {
    for (var j = i; j < stringInput.length; j++) {
      combinations.push(stringInput.substr(i, j - i + 1))
    }
  }
  return combinations.toString()
}

stringCombinations('dog')
