// filterLongWords()

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords (aWords, iLimit) {
  var longers = []
  for (var i = 0; i < aWords.length; i++) {
    if (aWords[i].length > iLimit) longers.push(aWords[i])
  }
  return longers
}

filterLongWords(['123', '123456', '1234567', '1234', '12345', '123'], 4)

function filterLongWords2 (aWords, iLength) {
  var aFiltered = aWords.filter(function (current) {
    return current.length > iLength
  })
  return aFiltered
}

filterLongWords2(['123', '123456', '1234567', '1234', '12345', '123'], 4)
