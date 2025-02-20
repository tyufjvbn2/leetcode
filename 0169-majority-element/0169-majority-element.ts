function majorityElement(nums: number[]): number {
    // 라이브러리 객체 필요함
    /**
        {
            1: 4,
            2: 3,
            3: 8
        }
     */
    
    let map: any = new Map()
    let count: number = 0;
    let result: number = 0

    for(let i = 0; i<nums.length; i++) {
        const val: number | undefined = map.get(nums[i]) // object.a ?

        if(!val) {
            map.set(nums[i], 1)
        }
        else{
            map.set(nums[i], val+1)
        }
    }

    map.forEach((val, key) => {
        if(val >= count) {
            count = val
            result = key
        }
    })

    return result
};