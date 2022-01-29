function makeAnagram(a, b) {
    const hGram = {};
    const str1 = a.length >= b.length ? a : b;
    const str2 = a.length < b.length ? a : b;
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        if (hGram[str1[i]]) {
            hGram[str1[i]]++;
        } else {
            hGram[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (hGram[str2[i]] > 0) {
            hGram[str2[i]]--;
        } else {
            count++;
        }
    }

    for (let key in hGram) {
        count += hGram[key];
    }

    console.log(count);
    return count;
}

let abc = "tester";
let cde = "thisIsAtester";
makeAnagram(cde, abc);



