

function moveLeft (val, arr) {
    let valInd = arr.indexOf(val)
    if(!arr.includes(val)){
        return `${val} not found in this list`
    }
    if(arr[0] === val){
        return `${val} is in the 0 index. Cannot move left`
    }

    [arr[valInd - 1], arr[valInd]] = [arr[valInd], arr[valInd-1]]
    return arr
}

function moveRight (val,arr) {
    let valInd = arr.indexOf(val)
    if (!arr.includes(val)) {
        return `${val} not found in this list`
    }
    if (arr[arr.length-1] === val) {
        return `${val} is in the last index. Cannot move right`
    }

    [arr[valInd], arr[valInd + 1]] = [arr[valInd + 1], arr[valInd]]
    return arr
}

let myArray = ['abc', 'xyz', 1, 2, 'Hey!']

console.log(moveLeft('xyz', myArray), myArray)
console.log(moveLeft('xyz', myArray), myArray)
console.log(moveRight(2, myArray), myArray)
console.log(moveRight(2, myArray), myArray)
console.log(moveRight(22, myArray), myArray)