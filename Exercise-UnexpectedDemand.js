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
 * Complete the 'filledOrders' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY order
 *  2. INTEGER k
 */

function filledOrders(order, k) {
  // Write your code here
  let res = [];
  let count = 0;
  order.sort((a, b) => a - b);

  for (let i = 0; i < order.length; i++) {
    if (order[i] <= k) {
      k -= order[i];
      count++;
    } else {
      break;
    }
  }

  return count;
}
