// 24 First not repeated

// Write a JavaScript function to find the first not repeated character.

// Sample arguments : 'abacddbec'
// Expected output : 'e'

function firstNotRepeated (string) {
  while (string.length > 0) {
    // console.log(string)
    var regex = new RegExp(string.charAt(0), 'g')
    // console.log(regex)
    if (string.match(regex).length === 1) return string.charAt(0)
    else string = string.replace(regex, '')
    // string = string.replace(regex, '')
    // console.log(string)
  }
  return null
}

firstNotRepeated('abacddbec')

firstNotRepeated('abacddbc')
