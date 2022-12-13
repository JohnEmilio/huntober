/*
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.

Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.
*/


var minFallingPathSum = function(matrix) {
    let n = matrix.length
    let dupe = Array(n)
    let min = Infinity
    // Make a copy of the original array
    for(let i = 0 ; i < n; i++){
        dupe[i] = [...matrix[i]]
    }

    // The loop starts from the "bottom up", starting at the first row in the matrix where there could be another row below it. Each loop, we move up a row in the matrix checking each element's minimum path
    for(let i = n-2; i >=0; i--){
        min = Infinity
        //In this loop, were checking each element in a row to find it's minimum path down and then setting that element in our copied array equal to the minimum path's sum
        for(let j = 0; j < n; j++){
            dupe[i][j] += dupe[i+1][j]
            //This will only run if we are past the first element in the row since we are checking the next row's previous value.
            if(j > 0){
                dupe[i][j] = Math.min(dupe[i][j], matrix[i][j] + dupe[i+1][j-1])
            }
            //This will only run if we are not at the last element of the row since we are checking the next row's next value
            if(j < n-1){
                dupe[i][j] = Math.min(dupe[i][j], matrix[i][j] + dupe[i+1][j+1])
            }
            min = Math.min(min, dupe[i][j])
        }
    }
    //As long as the length of out input is greater than 1 we will return our minimum, otherwise we can return the first element of the matrix.
    return n > 1 ? min : matrix[0][0]
    
};