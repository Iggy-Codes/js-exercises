// 23 Occurrencers Letter

// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2

function occurrencersLetter (string, letter) {
  var regex = new RegExp(letter, 'g')
  if (string.match(regex) === null) return 0
  return string.match(regex).length
}

occurrencersLetter('w3resource.com', 'o')
