/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    if(!A || !B) return 0
    if(A.length <= 0 || B.length <= 0) return 0
    
    // compare idx and store in matrix
    // [1,2,3]
    // [2,3,4]
    // [
    //     [0,0,0],
    //     [null+1,0 (i-1,j-1) +1,0+0],
    //     []
    // ]
    
    const m = []
    let max = 0
    A.forEach(v => {
        m.push([])
    })
    
    for(let i=0; i<A.length; i++) {
        for(let j=0; j<B.length; j++) {
            if(A[i] === B[j]) {
                let prev
                
                if(i-1<0) prev = 0
                else prev = m[i-1][j-1] ? m[i-1][j-1] : 0
                
                m[i][j] = prev + 1
            } else {
                m[i][j] = 0
            }
            if(m[i][j] > max) max = m[i][j]
        }
    }
    
    return max
};
