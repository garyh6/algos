/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return helper(n, '1')

};

function helper(n, current) {
    if (n === 1) return current
    let newSeq = ''
    let count = 1
    let value
    for(let i = 0; i < current.length; i++) {

        value = current[i]
        if (value != current[i+1]) {
            newSeq += count + '' + value
            count = 1
        } else {
            count++
        }
    }
    
    return helper(n-1, newSeq)
}