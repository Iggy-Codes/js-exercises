// Is palindrome?

// Write a JavaScript function that checks whether a passed string is palindrome or not A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome (sentence) {
  return (sentence.replace(' ', '') === sentence.replace(' ', '').split('').reverse().join(''))
}

isPalindrome('madam')
isPalindrome('nurses run')
isPalindrome('random sentence')
