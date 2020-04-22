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

/*
 * Complete the 'findSubsequence' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER k
 */

function findSubsequence(numbers, k) {
  // Write your code here
  let res = [];
  let max = 0;
  // numbers.sort((a,b)=>a-b)
  helper([], 0);
  //console.log(res)
  //console.log(res.length)
  return res;

  function helper(current, idx) {
    if (current.length >= k) {
      let gcd = getGCD(current);
      //console.log('c', current)
      //console.log('gcd', gcd)
      if (gcd > max) {
        max = gcd;
        res = current.slice();
      } else if (gcd === max && current.length > res.length) {
        res = current.slice();
      }

      //console.log('res', res)
    }
    if (idx > numbers.length) return;

    for (let i = idx; i < numbers.length; i++) {
      current.push(numbers[i]);
      helper(current, i + 1);
      current.pop();
    }
  }

  function getGCD(arr) {
    return arr.reduce(function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
    });
  }
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const numbersCount = parseInt(readLine().trim(), 10);

  let numbers = [];

  for (let i = 0; i < numbersCount; i++) {
    const numbersItem = parseInt(readLine().trim(), 10);
    numbers.push(numbersItem);
  }

  const k = parseInt(readLine().trim(), 10);

  const result = findSubsequence(numbers, k);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
