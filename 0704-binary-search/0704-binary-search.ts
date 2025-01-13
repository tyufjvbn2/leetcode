function search(nums: number[], target: number): number {
    function log(arr: number[], midI: number) {
        const mid: number = Math.floor(arr.length/2)

        // segment mid -- odd: itself / even: -1
        const isOdd: boolean = !!(arr.length%2)
        const newMidI: number = isOdd ? mid : mid-1
        const midNum: number = arr[newMidI]
        
        // mid is target
        if(midNum === target) {
            return midI+newMidI
        }
        // segment length is 1
        else if(mid === 0) {
            return -1
        }
        // bigger than mid
        else if (midNum < target) {
            const newArr: number[] = arr.slice(mid)
            return log(newArr, midI + mid)
        }
        else {
            const newArr: number[] = arr.slice(0,mid)
            return log(newArr, midI)
        }
    }

    return log(nums, 0)
    
    // best practice
    // let left = 0, right = nums.length - 1, old;
    // let index = right;
    
    // while (nums[index] !== target) {
    //     old = index;
    //     index = left + Math.floor((right - left) / 2);
        
    //     if (index === old) return -1;
    //     if (nums[index] > target) {
    //         right = index;
    //         continue;
    //     }
    //     if (nums[index] < target) {
    //         left = index;
    //         continue;
    //     }
        
    // }
    
    // return index;
};