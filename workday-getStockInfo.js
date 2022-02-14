"use strict";

const fs = require("fs");
const https = require("https");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

async function getStockInformation(date) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
  let dateObject = { open: 0, High: 0, Low: 0, Close: 0 };
  return new Promise(async (resolve, reject) => {
    const dateUrl = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
    https.get(dateUrl, (res) => {
      // res.setEncoding("utf8");
      let body = "";
      res.on("data", (data) => {
        body += data.data[0];
        console.log(body);
      });
      res.on("end", () => {
        body = JSON.parse(body);
        dateObject = body["data"];
        // console.log(body["data"]);
        // console.log(dateObject);
      });
    });
  });
}

getStockInformation("5-January-2001");

//https://codesandbox.io/s/stock-info-api-json-data-parsing-forked-904b6?file=/package.json
