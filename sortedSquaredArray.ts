//Write a function that takes in a non-empty array of integers that are sorted in asceding order and returns a new array of the same length of the original ints also sorted in asc order;

function sortedSquaredArray(array) {
  let ssa = Array(array.length).fill(0);
  let smallest = 0;
  let larger = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const small = array[smallest];
    const large = array[larger];

    if (Math.abs(small) > Math.abs(large)) {
      ssa[idx] = small * small;
      smallest++;
    } else {
      ssa[idx] = large * large;
      larger--;
    }
  }

  return ssa;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

let arr = [1, 2, -10, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray(arr));
