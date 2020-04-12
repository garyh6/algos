/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  if (rec1.length != 4 || rec2.length != 4) return false;

  // [x1,x2] rec1[0], rec1[2]
  // [x1,x2] rec2[0], rec2[2]

  // [y1,y2] rec1[1], rec1[3]
  // [y1,y2] rec2[1], rec2[3]

  if (
    Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1])
  )
    return true;
  //smaller of the y2 to be greater than the larger of the y1

  // if(! (rec1[0] >= rec2[2] ||
  //       rec1[2] <= rec2[0] ||
  //       rec1[1] >= rec2[3] ||
  //       rec1[3] <= rec2[1]) ) return true

  return false;
};

const rec1, rec2
rec1 = [0,0,2,2]
rec2 = [1,1,3,3]

const res = isRectangleOverlap(rec1, rec2)

console.log(res)