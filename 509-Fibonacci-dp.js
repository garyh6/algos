/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  const dp = [0, 1];

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  console.log("************ dp", dp);
  return dp[N];
};

const n = 5;
const res = fib(n);

console.log("************ res", res);
