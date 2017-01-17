// Calculation

// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

// Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function calculation (number, limit) {
  var sElements = 'Elements: '
  var iSum = 0
  var i = number
  while (i < limit) {
    sElements += i + ' '
    iSum += i
    i += number
  }
  console.log(sElements + '\nSum: ' + iSum)
}

calculation(23, 500)
