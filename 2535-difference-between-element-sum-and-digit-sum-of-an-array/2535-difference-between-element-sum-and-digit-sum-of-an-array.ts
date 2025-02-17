function differenceOfSum(nums: number[]): number {
    let elSum: number = 0
    let diSum: number = 0

    for(let i=0; i<nums.length; i++) {
        elSum += nums[i]
        if(nums[i] >= 10) {
            nums[i].toString().split("").forEach((digit) => {
                diSum += parseInt(digit)
            })
        }
        else {
            diSum += nums[i]
        }
    }

    const result: number = Math.abs(elSum - diSum)
    
    return result
};