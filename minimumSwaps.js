
function minimumSwaps(arr) {
    let swaps = 0
  
    for (let i = 0; i < arr.length; i++) {
      const num = i + 1
      const idx = arr.indexOf(num, i)
  
      if (arr[i] !== num) {
        arr[idx] = arr[i]
        arr[i] = num
        swaps++
      }
    }
  
    return swaps
  }
  
  let arr = [4, 3, 1, 2]
  console.log(minimumSwaps(arr));