function checkEquality(arr1, arr2) {
    return JSON.stringify(arr1) == JSON.stringify(arr2)
}

const arr1 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
const arr2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
const arr3 = [['a', 'B', 'c'], ['d', 'E', 'f'], ['g', 'H', 'i']]
const arr4 = [['a', 'b', 'c'], ['g', 'h', 'i'], ['d', 'e', 'f']]

// checkEquality(arr1, arr2) => true
// checkEquality(arr1, arr3) => false
// checkEquality(arr1, arr4) => false

console.log(checkEquality(arr1, arr2), 'true')
console.log(checkEquality(arr1, arr3), 'false')
console.log(checkEquality(arr1, arr4), 'false')