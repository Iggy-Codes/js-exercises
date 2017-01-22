// 16 Coinify

// Write a JavaScript function to convert an amount to coins.

// Sample function :
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

function amountTocoins (amountMoney, coins) {
  var indexCoins = 0
  var outputCoins = []
  while (amountMoney > 0 && indexCoins < coins.length) {
    if (amountMoney >= coins[indexCoins]) {
      outputCoins.push(coins[indexCoins])
      amountMoney -= coins[indexCoins]
    } else {
      indexCoins++
    }
  }
  if (amountMoney > 0) outputCoins.push('Remainder that can not be express in coins: ' + amountMoney)
  return outputCoins.toString()
}

amountTocoins(46, [25, 10, 5, 2, 1])

amountTocoins(46, [25, 10, 5, 2])
