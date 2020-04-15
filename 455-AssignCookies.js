/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);

  let cookie, child;
  let count = 0;
  while (g.length != 0 && s.length != 0) {
    child = g[g.length - 1];
    cookie = s.pop();

    if (cookie >= child) {
      count++;
      g.pop();
    }
  }

  return count;
};

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let cookie, child;
  let gi = 0;

  for (let si = 0; gi < g.length && si < s.length; si++) {
    if (s[si] >= g[gi]) gi++;
  }

  return gi;
};
