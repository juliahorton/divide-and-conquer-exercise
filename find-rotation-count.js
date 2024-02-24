// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints: time complexity O(log n)

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0


function findRotationCount(arr){
    const pivotPoint = findPivotPoint(arr);
    return pivotPoint
}
  

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


module.exports = findRotationCount