/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if(num === 0) return 'Zero'
    
    const obj = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety'
    }
    
    const obj2 = {
        3: 'Hundred',
        4: 'Thousand',
        7: 'Million',
        10: 'Billion'
    }
    let res = ''
    
    function hundredWord (n) {
        if(getLengthOfNum(n) > 3) throw new Error('hundredWord fn')
        
        let lengthOfNum = getLengthOfNum(n)
        let res = ''
                
        for(let i = lengthOfNum; i > 0; i--) {
            if(n == 0) break
            if(i === 3) {
                res += `${obj[Math.floor(n/100)]} `
                res += 'Hundred '
                n = n % 100
            } else if(i === 2) {
                // if one digit
                
                // if teens
                let tensNumber = Math.floor(n/10)
                if (n < 10) {
                    continue
                } else if(tensNumber == 1) {
                    res += `${obj[n]} `
                    i = 0
                } else {
                    res += `${obj[n - n % 10]} `
                    n = n % 10
                }
            } else if(i === 1) {
                if(n != 0) res += `${obj[n]} `
            } else {
                throw new Error('hundredWord fn 2')
            }
        }
        return res
    }
        
    function getLengthOfNum (n) {
        return Math.ceil(Math.log10(n+1))
    }
     
    // 1000 -> 10^3 -> log10(1000) = 3
    const lengthOfNum = getLengthOfNum(num)
    
    let i = lengthOfNum
        
    while(i > 0) {
        if(num == 0) break
        if(i >= 10) {
            // 1,234,567,891
            let threeDigitNum = Math.floor(num / 1000000000)
            if (threeDigitNum != 0) {
                res += hundredWord(threeDigitNum)
                res += obj2[10] + ' '
            }
            num = num % 1000000000
            i = 7
        } else if (i >= 7) {
            // 234,567,891
            let threeDigitNum = Math.floor(num / 1000000)
            if (threeDigitNum != 0) {
                res += hundredWord(threeDigitNum)
                res += obj2[7] + ' '
            }
            num = num % 1000000
            i = 4
        } else if (i >= 4) {
            // 567,891
            let threeDigitNum = Math.floor(num / 1000)
            if (threeDigitNum != 0) {
                res += hundredWord(threeDigitNum)
                res += obj2[4] + ' '
            }
            num = num % 1000
            i = 1
        } else if (i >= 1) {
            // 891
            res += `${hundredWord(num)}`
            i = 0
        } else {
            throw new Error('while loop')
        }
    }
        
    return res.slice(0, res.length-1)
};
