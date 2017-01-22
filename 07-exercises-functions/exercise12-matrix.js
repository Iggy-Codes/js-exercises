// Matrix

// Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrixIdentity (dimension) {
  var out = []
  for (var i = 0; i < dimension; i++) {
    var element = []
    for (var j = 0; j < dimension; j++) {
      (i === j) ? element.push(1) : element.push(0)
    }
    out.push(element)
  }
  return out
}

matrixIdentity(5)
