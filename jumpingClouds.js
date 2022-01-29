function jumpingOnClouds(clouds) {
    let jumpCount = 0
    let i = 0

    while (i < clouds.length - 1) {
        if (i + 2 < clouds.length && clouds[i + 2] === 0) {
            jumpCount += 1
            i += 2
        } else {
            jumpCount += 1
            i += 1
        }
    }
    return jumpCount
}

let clouds = 7;
let arrayOfClouds = ["0", "0", "1", "0", "0", "1", "0"];

console.log(jumpingOnClouds(arrayOfClouds));
