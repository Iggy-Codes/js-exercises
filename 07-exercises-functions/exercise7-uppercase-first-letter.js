 // Uppercase First Letter

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function uppercaseFirstLetter (sentenceInput) {
  return sentenceInput.split(' ').map(function (element) {
    return element.charAt(0).toUpperCase() + element.substr(1, element.length - 1)
  }).join(' ')
}

uppercaseFirstLetter('the quick brown fox')
