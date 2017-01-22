// 22 getStringId

// Write a JavaScript function that generates a string id (specified length) of random characters.

// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function getStringId (reference, longitut) {
  var out = []
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  for (var i = 0; i < longitut; i++) out.push(reference.charAt(getRandomInt(0, reference.length - 1)))
  return out.join('')
}

getStringId('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 15)
