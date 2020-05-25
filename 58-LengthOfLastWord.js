/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//     s = s.split(' ')
//     s = s.filter(str => str.length > 0)
    
//     if(s.length <= 0) return 0
    
//     return s.pop().length
// };

var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0
    
    let start
    let end
    // 'hello          '
    for(let i=s.length-1; i>=0; i--) {
        if(s[i] === ' ' && end === undefined) continue
        if(s[i] != ' ' && end === undefined) end = i
        
        if(s[i] === ' ' && end) {
            start = i+1
            break
        }
    }
    
    if(start === undefined) start = 0
    if(end === undefined) end = -1
    
    return end - start + 1
};
