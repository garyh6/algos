/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let sell = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      profit += sell - buy;
      buy = prices[i];
    }
    sell = prices[i];
  }

  if (sell === prices[prices.length - 1]) profit += sell - buy;

  return profit;
};
