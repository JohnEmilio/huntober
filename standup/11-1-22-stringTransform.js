/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

// input is a string. Varying casing, may have trailing or leading spaces. Only english alphabet characters. Need to reverse the words in the string
// return a string with the casing and the words reversed
// 'Hello Mom' => 'mOM hELLO'
// split the string by the spaces. Reverse that resulting array, then loop over each word and replace the casing on each letter in each word. Then join the array with a spce

function stringTransformer(str) {
    return str.split(' ').reverse().map(word => word.split('').map(ltr => {
        if (ltr === ltr.toUpperCase()) {
            return ltr.toLowerCase()
        }
        else {
            return ltr.toUpperCase()
        }
    }).join('')).join(' ')
}

