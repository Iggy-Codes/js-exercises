// findLongestWord()

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

// Observation: if two words have the same length we choose the first one

function findLongestWord (aWords) {
  var longest = ''
  for (var i = 0; i < aWords.length; i++) {
    if (aWords[i].length > longest.length) longest = aWords[i]
  }
  return longest
}

findLongestWord(['hi', 'everyone', 'my', 'darling'])

function findLongestWord2 (aWords) {
  return aWords.reduce(function (acc, current) {
    if (current.length > acc.length) acc = current
    return acc
  }, '')
}

findLongestWord2(['hi', 'everyone', 'my', 'darling'])
