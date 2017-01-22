// 26 Longest Country

// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

// Sample function : Longest_Country_Name(['Australia', 'Germany', 'United States of America'])
// Expected output : 'United States of America'

function longestCountryName (arrayNames) {
  return arrayNames.reduce(function (acc, current) {
    if (current.length > acc.length) acc = current
    return acc
  }, '')
}

longestCountryName(['Australia', 'Germany', 'United States of America'])
