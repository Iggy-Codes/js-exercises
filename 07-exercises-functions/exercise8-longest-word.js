 // Longest Word

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longestWord (sentenceInput) {
  return sentenceInput.split(' ').reduce(function (acc, current) {
    return (current.length > acc.length) ? current : acc
  }, '')
}

longestWord('Web Development Tutorial')
