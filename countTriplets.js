function countTriplets(arrayOfIntegers, r) {
    const hashMap1 = {};
    const hashMap2 = {};
    let count = 0;
    if (arrayOfIntegers.length < 3) return 0;
    for (let i = arrayOfIntegers.length - 1; i >= 0; i--) {
        let t1 = arrayOfIntegers[i];
        let t2 = t1 * r;
        let t3 = t2 * r;
        count += hashMap2[t3] || 0;
        if (hashMap2[t2]) {
            hashMap2[t2] += hashMap1[t2] || 0;
        } else {
            hashMap2[t2] = hashMap1[t2] || 0;
        }

        if (hashMap1[t1]) {
            hashMap1[t1]++;
        } else {
            hashMap1[t1] = 1;
        }
    }
    return count;
}
////////////////////////////////////////////////////////////////////
const arr = [1, 3, 9, 9, 27, 81];
const r = 3;
console.log(countTriplets(arr, r));
