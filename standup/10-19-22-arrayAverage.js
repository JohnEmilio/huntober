/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
*/

// P input is an unsorted array of integers, array will always have at least 1 element
// R return an integer
// E [1,2,3,4,5] => 3 // [1,1,1,1,1] => 1 // [1,1,1,1,1,2] => 1
// P using reduce method on the array, add all the values of the array together, then divide by the length of the array (number of elements). Using Math.floor, round the result down to the nearest whole number.

function getAverage (arr) {
    return Math.floor(arr.reduce((a,b) => a+b, 0) / arr.length)
}