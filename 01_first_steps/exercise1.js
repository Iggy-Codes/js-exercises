// Integer Numbers Range

// Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

function numberRange (x1, x2) {
  var sRange = ''
  if (x2 < x1) return (-1)
  for (var i = x1; i <= x2; i++) {
    sRange += i + ' '
  }
  return sRange
}
