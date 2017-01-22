// 19 Occurences

// Write a JavaScript function to get the number of occurrences of each letter in specified string.

function ocurrences (stringInput) {
  var result = {}
  while (stringInput.length > 0) {
    var regex = new RegExp(stringInput[0], 'g')
    result[stringInput[0]] = stringInput.match(regex).length
    stringInput = stringInput.replace(regex, '')
  }
  return result
}

ocurrences('the quick brown fox jumps over the lazy dog')
