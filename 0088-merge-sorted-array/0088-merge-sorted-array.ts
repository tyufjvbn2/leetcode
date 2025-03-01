/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // if(m === 0) {
    //     for(let i = 0; i<n; i++) {
    //         nums1[i] = nums2[i]
    //     }
    // }
    // else {
    //     function inputNum (arr: number[], target: number): number[] {
    //         if(arr.length === 1) {
    //             if(target >= arr[0]) {
    //                 arr.push(target)
    //             }
    //             else {
    //                 arr.unshift(target)
    //             }
    //             return arr
    //         }
    //         if(arr.length === 2) {
    //             if(target < arr[0]) {
    //                 arr.unshift(target)
    //             }
    //             else if(target > arr[1]) {
    //                 arr.push(target)
    //             }
    //             else {
    //                 arr.splice(1, 0, target)
    //             }
    //             return arr
    //         }
    //         else {
    //             const middleI: number = Math.floor(arr.length/2)
    //             if(arr[middleI] >= target) {
    //                 const backArr: number[] = arr.splice(middleI +1 )  // 얕은복사
    //                 const manipulated: number[] = inputNum(backArr, target)

    //                 arr.splice(middleI+1, arr.length, ...manipulated)
    //             }
    //             else {
    //                 const copyBackArr: number[] = arr.slice(middleI+1)
    //                 const frontArr: number[] = arr.splice(-middleI)
    //                 const manipulated: number[] = inputNum(frontArr, target)

    //                 arr.splice(manipulated.length, 0, ...copyBackArr)
    //             }
    //             return arr
    //         }
    //     }

    //     for(let i = 0; i<n; i++) {
    //         inputNum(nums1, nums2[i])
    //     }
    //     // const result = []
    //     // const validMax = Math.max(m,n)

    //     // for(let i = 0; i<validMax; i++) {
    //     //     if(nums1[i] === 0) {
    //     //         result.push(nums2[i])
    //     //         continue
    //     //     }

    //     //     if(nums1[i] >= nums2[i]) {
    //     //         result.push(nums2[i])
    //     //         result.push(nums1[i])
    //     //     }
    //     //     else {
    //     //         result.push(nums1[i])
    //     //         result.push(nums2[i])
    //     //     }
    //     // }

    //     // for(let j = 0; j<m+n; j++) {
    //     //     nums1[j] = result[j]
    //     // }
    // }

    /** new logic */
    // remove zero from backside
    nums1.splice(m, n)

    nums1.push(...nums2)
    nums1.sort((a,b) => a-b)
};