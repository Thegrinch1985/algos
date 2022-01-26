function linearSearch(array, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) {
      return i;
    }
  }
  return -1;
}

let arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
let x = 110;
console.log(linearSearch(arr, x));

arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
x = 175;
console.log(linearSearch(arr, x));
