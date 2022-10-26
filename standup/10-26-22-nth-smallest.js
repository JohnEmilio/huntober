/*
Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
*/

// input is an array of at least 3 elements, nums may be pos/neg/zeros, no floated values, array is unsorted ; 2nd parameter is an integer, such that we would return the nth smallest integer
// return the nth smallest integer from the input array
// [4,5,3,6,1,2], 3 => 3 // [3,1,2], 2 => 2
// sort the array using sort method, then return the nth-1 value by accessing it directly

function nthSmallest(arr, target) {
    return arr.sort((a, b) => a - b)[target - 1]
}

console.log(nthSmallest([3, 1, 2], 2), 2)
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7)
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7)
console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5), 92)