/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const nonZeros: number[] = []
    const zeros: number[] = []
    for(let i =0; i<nums.length; i++) {
        if(nums[i] !== 0) {
            nonZeros.push(nums[i])
        }
        else {
            zeros.push(nums[i])
        }
    }
    const newArr: number[] = nonZeros.concat(zeros)

    for(let j = 0; j<nums.length; j++) {
        nums[j] = newArr[j]
    }
};