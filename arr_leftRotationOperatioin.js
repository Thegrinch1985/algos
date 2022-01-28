function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0, d)];
}

let js = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rotLeft(js, 4));
