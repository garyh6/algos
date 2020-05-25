/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    // 0, 1 ,8
    // 2, 5
    // 6, 9
    let count = 0
    
    for(let i = 0; i < N+1; i++) {
        count += validNumber(i)
    }
    
    return count
};

function validNumber(num) {
    let s = num + ''
    let invalidNums = ["3", "4", "7"]
    let validNums = ["2", "5", "6", "9"]
    
    let isValid = false
    for(let i=0; i<s.length; i++) {
        if(invalidNums.includes(s[i])) return 0
        if(validNums.includes(s[i])) isValid = true
    }
    
    return isValid ? 1 : 0
}