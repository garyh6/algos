/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = [];
  dp[0] = 1;
  dp[1] = s.charAt(0) === "0" ? 0 : 1;

  let oneDigit, twoDigit;
  for (let i = 2; i <= s.length; i++) {
    dp[i] = 0;
    oneDigit = parseInt(s.charAt(i - 1));
    twoDigit = parseInt(s.slice(i - 2, i));
    //console.log('1', oneDigit)
    //console.log('2', twoDigit)
    if (oneDigit >= 1) {
      dp[i] += dp[i - 1];
    }

    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }

    console.log(i, dp[i]);
  }

  console.log(dp);

  return dp[s.length];
};
