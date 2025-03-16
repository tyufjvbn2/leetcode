function searchInsert(nums: number[], target: number, index: number = 0): number {
    // find middle
    // select left or right
    // find again in that array

    const middleI: number = nums.length%2 ? Math.floor(nums.length/2) : nums.length/2 -1
    const middle: number = nums[middleI]
    console.log("array check : ", nums)
    console.log("middle check : ", middle)
    console.log("index check : ", index)

    if(nums.length === 0) {
        return index
    }
    else if(middle === target) {
        return middleI + index
    }
    else if (nums.length < 2) {
        if(target < nums[0]) {
            return index
        }
        else {
            return index + 1
        }
    }
    else if(middle > target) {
        const left: number[] = nums.slice(0, middleI)
        return searchInsert(left, target, index)
    }
    else if (middle < target) {
        const right: number[] = nums.slice(middleI+1)
        return searchInsert(right, target, middleI+1+index)
    }
};