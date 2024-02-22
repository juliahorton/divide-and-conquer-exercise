// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints: time complexity O(log n)


//              L       M         R
//                        L   M   R
//                      
// countZeroes([1,1,1,1,1,1,0,0,0,0]) // 4
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal !== 0){
            leftIdx = middleIdx + 1
        } else if (middleVal === 0 && arr[leftIdx] !== 0){
            rightIdx = middleIdx
        } else {
            return arr.slice(leftIdx).length
        }
    }
    return 0
}

module.exports = countZeroes