// Find the middle of the array, use Array.sort()
//  to sort the values. Return the number at the midpoint
//   if length is odd, otherwise the average of the two middle numbers

function median(array) {
    const middle = Math.floor(array.length / 2),
        numbers = [...array].sort((a, b) => a - b);

    return array.length % 2 !== 0 ? numbers[middle] : (numbers[middle - 1] + numbers[middle]) / 2;
}

console.log(median([3,5,6,7,8,5,4,8,6,3,2,1,23,4,5]));
