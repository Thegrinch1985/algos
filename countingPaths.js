function countingValleys(steps, path) {
    let inValley = false;
    let altitude = 0;
    let valley = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === "D") {
            altitude -= 1;
        } else {
            altitude += 1;
        }
        if (altitude === -1 && !inValley) {
            inValley = true;
            valley += 1;
        }
        if (altitude === 0) {
            inValley = false;
        }
    }

    return valley;
}

let steps = 8;
let path = "UDDDUDUU";
console.log(countingValleys(steps, path));
