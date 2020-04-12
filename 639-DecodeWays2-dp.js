/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = [];
  dp[0] = 1;
  dp[1] = getOneDigit(s[0]);
  const M = 10 ** 9 + 7;

  function getOneDigit(n) {
    switch (n) {
      case "0":
        return 0;
      case "*":
        return 9;
      default:
        return 1;
    }
  }

  // if 1* then 18 = 9*1+9
  // if 2* then 15 = 9*1+6
  // if [3-9]* then 9 = 9+0

  // if *[0-6] then 11 = 9+2*1
  // if *[7-9] then 9 = 9+0*1
  // if ** then 96 = 9*9 + (17 - 2)*1
  // if # between 10-26 then dp[i-1]

  for (let i = 2; i <= s.length; i++) {
    dp[i] = 0;
    if (s.charAt(i - 1) === "*") {
      dp[i] += (9 * dp[i - 1]) % M;
      if (s.charAt(i - 2) === "1") {
        dp[i] += (dp[i - 2] * 9) % M;
      } else if (s.charAt(i - 2) === "2") {
        dp[i] += (dp[i - 2] * 6) % M;
      } else if (s.charAt(i - 2) === "*") {
        dp[i] += (dp[i - 2] * 15) % M;
      }
    } else {
      if (parseInt(s.charAt(i - 1)) >= 1) dp[i] += dp[i - 1] % M;

      if (s.charAt(i - 2) === "*") {
        if (parseInt(s.charAt(i - 1)) <= 6) {
          dp[i] += (2 * dp[i - 2]) % M;
        } else {
          dp[i] += dp[i - 2] % M;
        }
      } else if (
        parseInt(s.slice(i - 2, i)) >= 10 &&
        parseInt(s.slice(i - 2, i)) <= 26
      ) {
        dp[i] += dp[i - 2] % M;
      }
    }
    dp[i] %= M;
  }

  console.log(dp);
  return dp[s.length];
};
