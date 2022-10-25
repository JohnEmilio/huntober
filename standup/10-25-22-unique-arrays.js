/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
*/

// input is an array of arrays, each subarray may contain duplicate values, no negative integers, all whole numbers, each subarray will have at least one element
// output will be an integer of the total number of unique arrays that can be created by combining one element from each subarray
// [[1, 2], [4], [5, 6]] => 4 // [[1, 2], [4, 4], [5, 6, 6]] => 4
// loop through the array, removing any duplicate values from each subarray by using the Set constructor. Then find the length of each subarray and multiple each length together using the reduce method, returning an integer.

function solve(arr) {
    return arr.map(arr => [...new Set(arr)].length).reduce((a, b) => a * b)
}

console.log(solve([[1, 2], [4], [5, 6]]), 4)
console.log(solve([[1, 2], [4, 4], [5, 6, 6]]), 4)
console.log(solve([[1, 2], [3, 4], [5, 6]]), 8)
console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72)