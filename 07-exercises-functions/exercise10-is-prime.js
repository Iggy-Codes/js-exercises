// Is prime

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime (numberInput) {
  if (numberInput !== parseInt(numberInput) || numberInput <= 1) return false
  for (var i = 2; i <= numberInput - 1; i++) if (numberInput % i === 0) return false
  return true
}

isPrime(97) // true
isPrime(8) // false
isPrime(1.25) // false
isPrime(-3) // false
isPrime('a') // false
