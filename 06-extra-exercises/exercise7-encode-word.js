// encodeWord

/* Define a function called encodeWord that receives a string and return the codified version of that string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O */

function encodeWord (wordToEncode) {
  var out = ''
  for (var i = 0; i < wordToEncode.length; i++) {
    switch (wordToEncode.charAt(i)) {
      case 'T':
        out += '7'
        break
      case 'A':
        out += '4'
        break
      case 'S':
        out += '5'
        break
      case 'O':
        out += '0'
        break
      default:
        out += wordToEncode.charAt(i)
    }
  }
  return out
}

encodeWord('TASOABCDEFGHIJKLMNOPQSTUVWXYZ')

function encodeWord2 (wordToEncode) {
  return wordToEncode.replace(/T/g, '7').replace(/A/g, '4').replace(/S/g, '5').replace(/O/g, '0')
}

encodeWord2('TASOABCDEFGHIJKLMNOPQSTUVWXYZ')

/* encodeWordPlus

Improve the previous function to add a random number between 0 and 1000 every 7 characters */

function getIntRnd (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function encodeWordPlus (wordToEncode) {
  var out = ''
  for (var i = 0; i < wordToEncode.length; i++) {
    out += wordToEncode.charAt(i)
    if ((i + 1) % 7 === 0) out += getIntRnd(0, 1000)
  }
  return out
}

encodeWordPlus('ABCDEFG_HIJKLM_OPQ')
