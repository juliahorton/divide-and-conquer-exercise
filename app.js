// custom indexOf implementation
function linearSearch(arr, target){
	for(let i = 0; i < arr.length; i++){
		// if you find the value, return the index
		if (arr[i] === target) return i
	}
	// if you never find the value, return -1
	return -1
}


function binarySearch(arr, target){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx){
        // find the middle index of the array
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        let middleVal = arr[middleIdx];
        // if value of middle index is less than target, update left index so that only values less than the middle index's value will be included on the next iteration through the while loop
        if (middleVal < target){
            leftIdx = middleIdx + 1
        }
        // if value of middle index is greater than target, update right index so that only values greater than the middle index's value will be included on the next iteration through the while loop
        else if (middleVal > target){
            rightIdx = middleIdx -1
        }
        // if value of middle index matches target, return middle index
        else {
            return middleIdx
        }
    }
    // if value isn't in array, return -1
    return -1
}