// translate()

// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate (sentence) {
  var consonants = 'bcdfghjklmnpqrstvwxyz'
  var out = ''
  for (var i = 0; i < sentence.length; i++) {
    out += sentence.charAt(i)
    if (consonants.indexOf(sentence.charAt(i)) >= 0) out += 'o' + sentence.charAt(i)
  }
  return out
}

translate('this is fun') // tothohisos isos fofunon

function translate2 (sSentence) {
  return sSentence.replace(/[b-d,f-h,j-n,p-t,v-z,ñ]/g, '$&' + 'o' + '$&')
}

translate2('this is fun') // tothohisos isos fofunon
