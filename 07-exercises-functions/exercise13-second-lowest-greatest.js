 // Second lowest and second greatest

// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function secondLowestGreatest (arrayInput) {
  function compareFunction (a, b) {
    return a - b
  }
  arrayInput.sort(compareFunction)
  return (arrayInput.length > 1) ? arrayInput[1] + ',' + arrayInput[arrayInput.length - 2] : 'Array should have 2 or more elements'
}

secondLowestGreatest([8, 7, 6, 5, 4, 3, 2, 1])

secondLowestGreatest([1, 2])

secondLowestGreatest([1])
