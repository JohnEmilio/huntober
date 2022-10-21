/*
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

// P 2 input parameters, 1st is an array of integers (may be positive or negative) and 2nd is a positive integer of how many even number we will return starting at the end of the array. Array is not sorted. 
// R must return a new array with n number of even integers starting at the last even integer in the original array, may include negative integers. Integers are return in an array in the order they were in the original array
// E [1,2,3,4,5,6,7,8], 3 => [4, 6, 8] // [-2, 1, 5, 10, -8, 1], 2 => [10, -8]
// P filter the original array by even numbers, then use slice to grab only the n number of elements

function lastEvens(arr, n) {
    return arr.filter(num => num % 2 === 0).slice(-n)
}

function lastEvens(arr, n) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (newArr.length === n) {
            return newArr
        }
        else if (arr[i] % 2 === 0) {
            newArr.unshift(arr[i])
        }
    }
    return newArr
}

console.log(lastEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])
console.log(lastEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])