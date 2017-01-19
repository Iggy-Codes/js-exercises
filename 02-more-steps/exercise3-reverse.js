// reverse()

/* Define a function reverse() that computes the reversal of a string.
For example, reverse("jag testar") should return the string "ratset gaj". */

function reverse (sInput) {
  var sOut = ''
  for (var i = sInput.length - 1; i >= 0; i--) {
    sOut += sInput.charAt(i)
  }
  return sOut
}

reverse('jag testar')

function reverse2 (sInput) {
  return sInput.split('').reverse().join('')
}

reverse2('jag testar')
