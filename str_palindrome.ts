// write a function that takes in a string and checks if it is a palindrome
function isPalindrome(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return string === reversedString;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

console.log(isPalindrome("abcdedcba"));
console.log(isPalindrome("abcdessssca"));
