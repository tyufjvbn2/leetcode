function intersect(nums1: number[], nums2: number[]): number[] {
    // nums1 = [...new Set(nums1)]
    // nums2 = [... new Set(nums2)]
    const min: number = Math.min(nums1.length, nums2.length)
    let small: number[] = []
    let large: number[] = []

    const result = []

    if(nums1.length === min) {
        small = nums1
        large = nums2
    }
    else {
        small = nums2
        large = nums1
    }

    for(let i =0; i<small.length; i++) {
        const findI: number = large.indexOf(small[i])
        if(findI !== -1) {
            result.push(small[i])
            large.splice(findI, 1)
        }
    }

    return result
};