// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints: time complexity O(log n)

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {

    if (arr.length === 1 && arr[0] === num) return 1;
    if (num < arr[leftIdx] || num > arr[rightIdx]) return -1;

    //find boundary where the element to the left is less than target (get index)
    const leftBoundary = findLeftBoundary(arr, num);

    //find boundary where the element to the right is greater than target (get index)
    const rightBoundary = findRightBoundary(arr, num);

    if (leftBoundary === rightBoundary){
        return 1
    }

    //find difference between these 2 indexes
    return rightBoundary - leftBoundary + 1
}

function findLeftBoundary(arr, num){
    const binarySearchIdx = binarySearch(arr, num);
    const slicedArr = arr.slice(0, binarySearchIdx + 1);
    let leftIdx = 0;
    let rightIdx = slicedArr.length - 1;
    // find the point at which the item on the right is the target number
    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let middleVal = slicedArr[middleIdx];

        if (middleVal < num && slicedArr[middleIdx + 1] === num) {
            return middleIdx + 1
        }

        else if (middleVal < num){
            leftIdx = middleIdx + 1
        }

        else if (middleVal > num){
            rightIdx = middleIdx -1
        }
        else {
            return middleIdx
        }
    }
    return 0
}


function findRightBoundary(arr, num){
// same as above but reverse
    const binarySearchIdx = binarySearch(arr, num);
    const slicedArr = arr.slice(binarySearchIdx);
    const elsExcluded = arr.length - slicedArr.length;
    let leftIdx = 0;
    let rightIdx = slicedArr.length - 1;
    // find the point at which the item on the left is the target number
    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let middleVal = slicedArr[middleIdx];

        if (middleVal > num && slicedArr[middleIdx - 1] === num) {
            return middleIdx - 1 + elsExcluded
        }

        else if (middleVal > num){
            rightIdx = middleIdx - 1
        }

        else if (middleVal <= num){
            leftIdx = middleIdx + 1
        }
        else {
            return elsExcluded
        }
    }
    return arr.length - 1
}

// won't actually need this one, or is there a way to refactor/shorten findLeftBoundary and findRightBoundary by using one search with logic that handles both cases as opposed to two searches with very similar logic?
// function binaryBoundarySearch(arr, target, leftIdx = 0, rightIdx = arr.length -1){
//     while (leftIdx <= rightIdx){
//         let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
//         let middleVal = arr[middleIdx];

//         if (middleVal < target && arr[middleIdx + 1] === target) {
//             return middleIdx + 1
//         }

//         else if (middleVal < target){
//             leftIdx = middleIdx + 1
//         }

//         else if (middleVal > target){
//             rightIdx = middleIdx -1
//         }
//         else {
//             return middleIdx
//         }
//     }
//     return -1
// }

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

module.exports = sortedFrequency