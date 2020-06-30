//  问题1： 字符串中找出出现次数最多的单词， 例如： 'My name is kain, please call me kain!'

// 方法一, 字符串拆为数列进行处理
function findWord(str) {
    if(!str || !str.length) return ''
    let strArr = str.split(''), len = strArr.length
    let strObj = {}, startIndex = 0, currentStr = '', lowerStr = ''
    let chars = 'qwertyuiopasdfghjklzxcvbnm'.split('')
    for(let i=0; i<len; i++) {
        lowerStr = strArr[i].toLowerCase()
        if(chars.indexOf(strArr[i].toLowerCase()) < 0) {
            if(chars.indexOf(strArr[startIndex].toLowerCase()) >-1) {
                currentStr = strArr.slice(startIndex , i).join('').toLowerCase()
                if(!strObj[currentStr]) strObj[currentStr] = 1
                else strObj[currentStr]++
            }
            startIndex = i+1
        }
    }
    let maxKey = '', maxValue = 0
    for(let key in strObj) {
        if(strObj[key] > maxValue) {
            maxKey = key
            maxValue = strObj[key]
        }
    }
    return {maxKey, maxValue}
}

console.log('findWord',findWord('My name is kain, .   please call me kain!     . .,,,kain   is dvcfvbv'))
// 输出  {maxKey: 'kain', maxValue:  3}

// 方法2,通过正则表达式来进行处理
function findWord2(str){
    if(!str || !str.length) return ''
    let strArr = str.split(/\W+/), lowerWord = '', strObj = {}
    for(let i=0; i<strArr.length; i++) {
        lowerWord = strArr[i].toLowerCase()
        if(!strObj[lowerWord]) strObj[lowerWord] = 1
        else strObj[lowerWord]++
    }
    let maxKey = '', maxValue = 0
    for(let key in strObj) {
        if(strObj[key] > maxValue) {
            maxKey = key
            maxValue = strObj[key]
        }
    }
    return {maxKey, maxValue}
}

console.log('findWord2',findWord2('My name is kain, .   please call me kain!     . .,,,kain   is dvcfvbv'))


