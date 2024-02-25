// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Constraints: time complexity O(log n)

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

function findFloor(arr, num) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;


    if (arr[0] > num) return -1;
    if (arr.length === 1 && arr[0] <= num) return arr[0];
    if (arr[rightIdx] <= num) return arr[rightIdx];

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal <= num && arr[middleIdx + 1] > num){
            return middleVal
        }

        else if (middleVal < num){
            leftIdx = middleIdx;
        }

         else if (middleVal > num){
            rightIdx = middleIdx
        }
    }
}

module.exports = findFloor