/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  let area1, area2, overlap;

  function area(a, b, c, d) {
    return (c - a) * (d - b);
  }

  area1 = area(A, B, C, D);
  area2 = area(E, F, G, H);

  //x: AECG
  //y: BFDH

  if (Math.min(C, G) > Math.max(A, E) && Math.min(D, H) > Math.max(B, F)) {
    overlap = area(
      Math.max(E, A),
      Math.max(B, F),
      Math.min(C, G),
      Math.min(H, D)
    );
  } else {
    overlap = 0;
  }

  return area1 + area2 - overlap;
};

let a, b, c, d, e, f, g, h;
a = -2;
b = -2;
c = 2;
d = 2;
e = -1;
f = 4;
g = 1;
h = 6;

const res = computeArea(a, b, c, d, e, f, g, h);
console.log(res);
