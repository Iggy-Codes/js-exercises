// charFreq()

// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
// Represent the frequency listing as a Javascript object.
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq (sSequence) {
  var oOut = {}
  for (var i = 0; i < sSequence.length; i++) {
    var letter = sSequence.charAt(i)
    // check if we didn't process the character
    if (oOut[letter] === undefined) {
      var re = new RegExp(letter, 'g')
      oOut[letter] = sSequence.match(re).length
    }
  }
  return oOut
}

charFreq('abbabcbdbabdbdbabababcbcbab')
