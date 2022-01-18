function firstDuplicateValue(array) {
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}


let array = [2,5,4,3,6,4,34,2,1,3,4,56,6,8,6];


console.log(firstDuplicateValue(array));