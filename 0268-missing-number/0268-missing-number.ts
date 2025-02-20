function missingNumber(nums: number[]): number {
    const sorted: number[] = nums.sort((a:number,b:number) => a-b)

    let result: number = sorted.length

    // [1, 2, 3.....], [1, 2]
    if (nums[0] === 1) {
        result = 0
        return result    
    }

    // 1,2,3,5
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] > 1) {
            result = sorted[i] - 1
            break
        }
    }

    return result
};