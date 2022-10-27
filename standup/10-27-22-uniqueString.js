/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

// input is a string of different lengths, may have lowercase and capital letters, may have special characters and whitespace
// return a new string of equal length where each character = '(' if the original character at that index was unique, or = ')' if the original character occured more than once 
// 'din' => '(((' // 'Success' => ")())())"
// split the string, map over the string and check if indexOf === lastIndexOf, if yes return '(' if no return '(' and push that letter into a tracking queue

const uniqueString = (str) => {
    let tracker = {}
    let result = ''
    let strArr = str.toLowerCase().split('')

    strArr.forEach(ltr => {
        if (ltr in tracker) {
            tracker[ltr]++
        }
        else {
            tracker[ltr] = 1
        }
    })

    for (const ltr of strArr) {
        tracker[ltr] === 1 ? result += '(' : result += ')'
    }
    
    return result
}

console.log(uniqueString('din'), '(((')
console.log(uniqueString('recede'), '()()()')
console.log(uniqueString('Success'), ')())())')
console.log(uniqueString('(( @'), '))((')