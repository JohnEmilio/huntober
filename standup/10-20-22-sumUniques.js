/*
You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)
*/

function repeats(nums) {
    return nums.reduce((sum, num, ind, arr) => {
        if (ind === arr.lastIndexOf(num) && ind === arr.indexOf(num)) {
            return sum += num
        }
        else return sum
    }, 0)
}

function repeats (arr) {
    let filteredNums = nums.filter((el, ind, arr) => ind === arr.lastIndexOf(el) && ind === arr.indexOf(el))
    return filteredNums.reduce((a, b) => a + b)
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(repeats([5, 10, 19, 13, 10, 13]), 24)