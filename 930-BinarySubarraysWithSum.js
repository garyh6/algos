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

var numSubarraysWithSum = function(A, S) {
    if(A.length === 0 || S === null) return 0
    let prefix = {}
    let count = 0
    let sum = 0
    for(let i=0; i<A.length; i++) {
        sum += A[i]
        if(sum - S === 0 && S != 0) {
            if(prefix[0]) count += 1+prefix[0]
            else count++
        }
        else if (prefix[sum-S]) count += prefix[sum-S]
        else if (S === 0 && sum === 0 && !prefix[0]) {
            prefix[0] = 1
            count += prefix[0]
        }
        
        if(prefix[sum]) prefix[sum]++
        else prefix[sum] = 1

    }
    
    return count
};
