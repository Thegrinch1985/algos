function sockMerchant(numberOfSocks, arrayOfSocks) {
  let pairs = 0;
  arrayOfSocks.sort();

  for (let i = 0; i < numberOfSocks - 1; i++) {
    if (arrayOfSocks[i] === arrayOfSocks[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

let arrayOfSmellySocks = [3, 4, 5, 6, 7, 3, 5, 6, 7, 8, 9, 1, 3, 6];
console.log(sockMerchant(13, arrayOfSmellySocks));
