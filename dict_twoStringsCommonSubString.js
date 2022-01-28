function twoStrings(s1, s2) {
  let s3 = [...s1];
  let s4 = [...s2];

  for (const value of s4) {
    if (s3.includes(value)) {
      return "YES";
    }
  }
  return "NO";
}

let s1 = "qwertyuiioopp";
let s2 = "po";

console.log(twoStrings(s1, s2));
s1 = "qwertyuiioopp";
s2 = "as";
console.log(twoStrings(s1, s2));
