// Reverse Number

// Write a JavaScript function that reverse a number

// Example x = 32243; Expected Output : 34223

function reverseNumber (numberInput) {
  return parseInt(numberInput.toString().split('').reverse().join(''), 10)
}

reverseNumber(32243)

