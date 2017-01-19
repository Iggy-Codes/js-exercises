// translate()

// Represent a small bilingual lexicon as a Javascript object in the following fashion
// {'merry':'god', 'christmas':'jul', 'and':'och', 'happy':gott', 'new':'nytt', 'year':'år'}
// and use it to translate your Christmas cards from English into Swedish.

function translate (sInput) {
  var englishWords = ['merry', 'christmas', 'and', 'happy', 'new', 'year']
  var swedishWords = ['god', 'jul', 'och', 'gott', 'nytt', 'år']
  var aWords = sInput.split(' ')
  for (var i = 0; i < aWords.length; i++) {
    console.log(aWords[i] + '**' + englishWords.indexOf(aWords[i].toLowerCase()))
    if (englishWords.indexOf(aWords[i].toLowerCase()) > -1) aWords[i] = swedishWords[englishWords.indexOf(aWords[i].toLowerCase())]
  }
  return aWords.join(' ')
}

translate('Merry Christmas And Happy New Year 2017 My Friend\n mErRy ChRistMas')

function translate2 (sInput) {
  var englishWords = ['merry', 'christmas', 'and', 'happy', 'new', 'year']
  var swedishWords = ['god', 'jul', 'och', 'gott', 'nytt', 'år']
  for (var i = 0; i < englishWords.length; i++) {
    var re = new RegExp(englishWords[i], 'gi')
    sInput = sInput.replace(re, swedishWords[i])
  }
  return sInput
}

translate2('Merry Christmas And Happy New Year 2017 My Friend\n mErRy ChRistMas')
