function checkMagazine(magazine, note) {
  console.log(magazine);
  console.log(note);
  let count = note.length;
  for (const value of note) {
    if (magazine.includes(value)) {
      note.shift();
      count--;
    }
  }
  if (count === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

let s1 = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
let s2 = ["ive", "got", "some", "coconuts"];
// let s3 = ["This", "a", " Extremely Long", "Story"];
console.log(checkMagazine(s1, s2));
// console.log(checkMagazine(s1, s3));

let s3 = ["give", "me", "one", "grand", "today", "tonight"];
let s4 = ["give", "one", "grand", "today"];
console.log(checkMagazine(s3, s4));
