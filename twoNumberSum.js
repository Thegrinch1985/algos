function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let i = 0; i < array.length - 1; i++) {
      const fn = array[i];

      for (let j = i + 1; i < array.length; j++) {
        const sn = array[j];

        if(sn + fn === targetSum){
            return [fn, sn];
        }
      }
    }
    return []
  }
}


let array = [2,5,4,3,6,4,34,2,1,3,4,56,6,8,6];
let t = 9;

console.log(twoNumberSum(array, t))