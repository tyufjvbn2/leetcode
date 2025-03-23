function removeDuplicates(nums: number[]): number {
    const setArr: number[] = [...new Set(nums)].sort((a,b) => a-b)

    const len: number = setArr.length
    // const lenDiff: number = nums.length - len

    // const underBarArr: string[] = new Array(lenDiff).fill("_")

    for(let i = 0; i< nums.length; i++) {
        if(setArr[i] !== undefined) {
            nums[i] = setArr[i]
        }
        else {
            // nums[i] = "_"
        }
    }

    // nums = setArr.concat(underBarArr)

    return setArr.length
};