function containsDuplicate(nums: number[]): boolean {
    const compare: number[] = [...new Set(nums)]
    let result: boolean = nums.length === compare.length ? false : true

    // // for문 순회하면서 비교할 배열에 숫자 넣으면서 비교

    
    // const compare: number[] = []

    // for(let i =0; i< nums.length; i++) {
    //     if(!compare.length) {
    //         compare.push(nums[i])
    //         continue
    //     }
    //     if(compare.include(nums[i])) {
    //         // 
    //     }

    // }

    return result
};