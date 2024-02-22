// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints: time complexity O(log n)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, num){
    const pivot = findPivotPoint(arr);
    if (pivot > 0 && num <= arr[pivot - 1] && num >= arr[0]){
        return binarySearch(arr, num, 0, pivot - 1)
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1)
    }
}

function binarySearch(arr, target, leftIdx = 0, rightIdx = arr.length - 1){
    if (arr.length === 0) return -1;
    if (target < arr[leftIdx] || target > arr[rightIdx]) return -1;

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < target){
            leftIdx = middleIdx + 1
        }

        else if (middleVal > target){
            rightIdx = middleIdx -1
        }
        else {
            return middleIdx
        }
    }
    return -1
}

function findPivotPoint(arr){
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < arr[middleIdx - 1]){
            return middleIdx
        } else if (arr[leftIdx] >= arr[rightIdx]){
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
}


module.exports = findRotatedIndex