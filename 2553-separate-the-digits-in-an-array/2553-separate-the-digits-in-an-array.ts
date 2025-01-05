function separateDigits(nums: number[]): number[] {
    // early return
    if(nums.length === 0) {
        return nums
    }

    // seperate and concat
    const numArr: number[] = nums.reduce((arr, num) => {
        return arr.concat(num.toString().split("").map((str) => parseInt(str)))
    }, [])

    return numArr

    /*
     * best practice
     *
     * return nums.join('').split('').map(Number)
     */
};