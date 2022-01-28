function checkMagazine(magazine, ransom) {
  const map = { };
    let replicable = true;
    for ( const value of magazine ) {
        map[value] = (map[value] || 0) + 1;
    }
    for ( const value of ransom ) {
        map[value] = (map[value] || 0) - 1;
    }
    for ( const value in map ) {
        if ( map[value] < 0 ) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
}

let s1 = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
let s2 = ["ive", "got", "some", "coconuts"];
checkMagazine(s1, s2)

let s3 = ["give", "me", "one"];
let s4 = ["give", "one", "grand", "today"];
checkMagazine(s3, s3)
