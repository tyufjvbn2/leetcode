function containsDuplicate(nums: number[]): boolean {
    const compare: number[] = [...new Set(nums)]
    let result: boolean = nums.length === compare.length ? false : true

    return result
};