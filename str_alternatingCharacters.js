function alternatingCharacters(s) {
  let stringOfWordsToArray = [...s];
  let deletions = 0;
  let lastChar = "";
  for (const value of stringOfWordsToArray) {
    if (lastChar == value) {
      deletions++;
    }
    lastChar = value;
  }

  return deletions;
}

exports.alternatingCharacters = alternatingCharacters;

console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("BBBBB"));
console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("BABABA"));
console.log(alternatingCharacters("AAABBB"));

// Sample Output

// 3
// 4
// 0
// 0
// 4
