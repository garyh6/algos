"use strict";

const fs = require("fs");

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

// Return party with votes over 5% threshold and return sorted array
/*
 * Complete the 'parliamentParties' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY votes as parameter.
 */

function parliamentParties(votes) {
  // Write your code here
  const count = {};
  const threshold = Math.ceil(0.05 * votes.length);
  for (let i = 0; i < votes.length; i++) {
    if (!count[votes[i]]) count[votes[i]] = 1;
    else count[votes[i]]++;
  }

  //console.log(count)

  const res = Object.entries(count).map(([key, val]) => {
    if (val >= threshold) return key;
  });

  //console.log(res)
  res.sort();

  return res;
}
