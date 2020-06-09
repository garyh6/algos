/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
// O(n**2)
// var numSubarraysWithSum = function(A, S) {
//     let total = 0
//     let current = 0
//     let sum = 0
//     let start = 0
    
//     while (start != A.length) {
//         for(let i=start; i<A.length; i++) {
//             sum += A[i]
//             if(sum === S) current++
//             else if(sum > S) {
//                 break
//             } 
//         }
//         if(current === 0 && S != 0) break
//         total += current
//         current=0
//         sum=0
//         start++
//     }

//     return total
// };

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
    if(A.length === 0 || S == null) return 0
    const seen = {}
    let sum = 0
    let count = 0
    for (let i=0; i< A.length; i++) {
        sum += A[i]
        if(sum === S) {
            count++
            count += seen[0] ? seen[0] : 0
        }
        else {
            let dif = sum-S
            count += seen[dif] ? seen[dif] : 0
        }
        
        if(!seen[sum]) seen[sum] = 1
        else seen[sum]++
        
    }
    return count
};
