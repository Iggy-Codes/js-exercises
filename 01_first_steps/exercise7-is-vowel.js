// isVowel() function

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel (letter) {
  letter = letter.toLowerCase()
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') return true
  else return false
}

isVowel('I')
isVowel('z')

function isVowel1 (letter) {
  var vowels = 'aeiou'
  if (vowels.indexOf(letter.toLowerCase()) >= 0) return true
  else return false
}

isVowel1('I')
isVowel1('z')

function isVowel2 (letter) {
  // console.log(/aeiou/i.match(letter))
  return (/a|e|i|o|u/i.test(letter))
}

isVowel2('I')
isVowel2('z')

