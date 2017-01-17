// Multiplications table
// Write a function that writes in the console the multiplication table (from 1 to 10)
// multiplication
// Hint: https://msdn.microsoft.com/en-us/library/2yfce773(v=vs.94).aspx

function multiplicationTable () {
  var sTable = ''
  for (var i = 1; i <= 10; i++) {
    var sLine = ''
    var sChars
    for (var j = 1; j <= 10; j++) {
      sLine += i * j
      sChars = '' + i * j
      console.log(sChars + '  ' + sChars.length)
      if (sChars.length === 1) sLine += ' '
      sLine += ' '
    }
    sTable += sLine + '\n'
  }
  console.log(sTable)
}

multiplicationTable()
