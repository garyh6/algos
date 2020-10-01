/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let str = num.toString()
    const obj = {
        1: {
            1: 'I',
            5: 'V'
        },
        2: {
            1: 'X',
            5: 'L'
        },
        3: {
            1: 'C',
            5: 'D'
        },
        4: {
            1: 'M'
        }
    }
    
    let res = ''
    
    for(let i=0; i<str.length; i++) {
        if(str[i] === '4') {
            res += obj[str.length - i][1]
            res += obj[str.length - i][5]
        } else if (str[i] === '9') {
            res += obj[str.length - i][1]
            res += obj[str.length - i + 1][1]
        } else {
            if(parseInt(str[i]) >= 5) {
                res += obj[str.length - i][5]
                for(let j=0; j<parseInt(str[i]) - 5; j++) {
                    res += obj[str.length - i][1]
                }
            } else {
                for(let j=0; j<parseInt(str[i]); j++) {
                    res += obj[str.length - i][1]
                }
            } 
        }
    }
    
    return res
};