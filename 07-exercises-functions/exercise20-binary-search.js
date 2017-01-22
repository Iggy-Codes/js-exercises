// 20 Binary Search

// Write a function for searching JavaScript arrays with a binary search. Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// Hint: https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array Hint: https://en.wikipedia.org/wiki/Binary_search_algorithm

// Given an array A of n elements with values or records A0 ... An−1, sorted such that A0 ≤ ... ≤ An−1, and target value T, the following subroutine uses binary search to find the index of T in A
// 1m. Set L to 0 and R to n − 1.
// 2. If L > R, the search terminates as unsuccessful.
// 3. Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R)/2.
// 4. If Am < T, set L to m + 1 and go to step 2.
// 5. If Am > T, set R to m – 1 and go to step 2.
// 6. Now Am = T, the search is done; return m.

function binarySearch (aString, valueToSearch) {
  var startInterval = 0
  var endInterval = aString.length - 1
  var index = Math.round((startInterval + endInterval) / 2)
  while (startInterval <= endInterval) {
    if (aString[index] === valueToSearch) return index
    if (startInterval === endInterval) return (-1)
    if (aString[index] > valueToSearch) {
      if (endInterval === index) return (-1)
      else {
        endInterval = index
        index = Math.floor((startInterval + endInterval) / 2)
      }
    } else {
      if (startInterval === index) return (-1)
      else {
        startInterval = index
        index = Math.ceil((startInterval + endInterval) / 2)
      }
    }
  }
  return index
}

binarySearch(['a', 'b', 'd', 'f', 'g', 'l', 'n', 'o', 'q', 'r', 't', 'y', 'z'], 'b')
