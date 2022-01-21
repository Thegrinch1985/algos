// Given two non-empty array of integers , write a function that determines whether the second array is a sub sequence

function isValidSubsequence(array, sequence) {
  let sqi = 0;
  for (const value of array) {
    if (sqi === sequence.length) {
      break;
    }

    if (sequence[sqi] === value) {
      sqi++;
    }
  }

  return sqi === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;

let array1 = [2, 3, 4, 6, 5, 7, 8, 9, 4];

let seq1 = [9, 4];

console.log(isValidSubsequence(array1, seq1));
