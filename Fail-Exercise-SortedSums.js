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
 * Complete the 'sortedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function sortedSum(a) {
  if (!a || a.length === 0) return 0;
  if (a.length === 1) return a[0];

  let idx = 1;
  let sum = 0;
  let temp = [];
  console.log(temp);

  function insertSort(nums) {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1;
      let tmp = nums[i];
      while (j >= 0 && nums[j] > tmp) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = tmp;
    }
    return nums;
  }

  while (idx < a.length + 1) {
    // temp = [...temp, a[idx-1]].sort((a,b)=>a-b)
    temp = insertSort([...temp, a[idx - 1]]);
    console.log(temp);
    for (let i = 0; i < idx; i++) {
      sum += (temp[i] * (i + 1)) % (10 ** 9 + 7);
      sum %= 10 ** 9 + 7;
    }
    idx++;
  }

  return sum % (10 ** 9 + 7);
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const aCount = parseInt(readLine().trim(), 10);

  let a = [];

  for (let i = 0; i < aCount; i++) {
    const aItem = parseInt(readLine().trim(), 10);
    a.push(aItem);
  }

  const result = sortedSum(a);

  ws.write(result + "\n");

  ws.end();
}
