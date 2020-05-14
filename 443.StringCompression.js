/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let pointer = 0
    let count = 1
    
    for(let i=0; i< chars.length; i++) {
        if(chars[i] === chars[i+1]) {
            count++
        } else {
            pointer++
            if(count != 1) {
                count = count+''
                count = count.split('')
                //chars = [...chars.slice(0, pointer), ...count, ...chars.slice(i+1, chars.length)]
                chars.splice(pointer, i+1-pointer, ...count) //in place
                
                i -= (i+1) - (pointer)
                i += count.length
                pointer = i+1
            }
            count = 1
        }
    }
    return chars.length
};

