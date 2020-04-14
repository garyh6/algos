/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = stones;
  heap.sort((a, b) => a - b);

  let s1, s2;
  while (heap.length > 1) {
    s1 = heap.pop();
    s2 = heap.pop();

    heap.push(Math.abs(s1 - s2));
    heap.sort((a, b) => a - b);
  }

  return heap.length ? heap[0] : 0;
};

const stones = [
  434,
  667,
  378,
  919,
  212,
  902,
  240,
  257,
  208,
  996,
  411,
  222,
  557,
  634,
  425,
  949,
  755,
  833,
  785,
  886,
  40,
  159,
  932,
  157,
  764,
  916,
  85,
  300,
  130,
  278,
];

const res = lastStoneWeight(stones);
console.log("*********** res  ", res);
