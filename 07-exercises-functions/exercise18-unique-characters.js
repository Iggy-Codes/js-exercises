// 18 Unique Characters

// Write a JavaScript function to extract unique characters from a string.

// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "qickbwnfxjmpsvlazydg"

function uniqueCharacters (stringInput) {
  for (var i = 0; i < stringInput.length; i++) {
    var regex = new RegExp(stringInput[i], 'g')
    console.log(regex + ' ' + stringInput.match(regex).length)
    // console.log(stringInput.match(argumentSearch))
    if (stringInput.match(regex).length > 1) stringInput = stringInput.replace(regex, '')
  }
  return stringInput
}

if (uniqueCharacters('thequickbrownfoxjumpsoverthelazydog') === 'qickbwnfxjmpsvlazydg') console.log('Ok')
else console.log('KO')
