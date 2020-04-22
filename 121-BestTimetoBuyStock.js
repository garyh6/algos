/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;

  let min = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else if (prices[i] - min > profit) profit = prices[i] - min;
  }
  return profit;
};
