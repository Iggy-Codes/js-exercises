// 25 Bubble Sort algorithm

// Write a JavaScript function to apply Bubble Sort algorithm.

// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSortAlgorithm (arrayToSort) {
  var sorted = false
  while (!sorted) {
    sorted = true
    for (var i = 0; i < arrayToSort.length - 1; i++) {
      if (arrayToSort[i + 1] > arrayToSort[i]) {
        var aux = arrayToSort[i]
        arrayToSort[i] = arrayToSort[i + 1]
        arrayToSort[i + 1] = aux
        sorted = false
      }
    }
  }
  return arrayToSort
}

bubbleSortAlgorithm([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
