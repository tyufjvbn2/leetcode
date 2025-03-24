function mySqrt(x: number): number {
    /* simple by method */
    return Math.floor(Math.sqrt(x))

    // /** problemm maker's intention... */
    // function recur (target: number, expectRoot: number, limit: number) {
    //     // exception case 1
    //     if (target === 0) {
    //         return 0
    //     }
    //     // exception case 2
    //     if(target <= 3) {
    //         return 1
    //     }
    //     // logic
    //     // divide 2

    //     if(expectRoot * expectRoot === target) {
    //         return expectRoot
    //     }
    //     else if (expectRoot*expectRoot > target) {
    //         // more small num -- divide 2
    //         limit = Math.ceil(expectRoot)
    //         return recur(target, expectRoot/2, limit)
    //     }
    //     else {
    //         // more bigger num -- 1.5 mul 
    //         let bigger: number = expectRoot*1.5
    //         console.log("bigger check : ", bigger)
    //         console.log("limit check : ", limit)
    //         if(bigger > limit) {
    //             if(Math.floor(bigger) - limit <= 1) {
    //                 return limit - 1
    //             }
    //             else {
    //                 bigger = (expectRoot+limit)/2
    //                 return recur(target, bigger, limit)
    //             }
    //         }
    //         else {
    //             limit = Math.ceil(bigger)
    //             return recur(target, bigger, limit)
    //         }        
    //     }
    // }
  
    // return recur(x, x/2, x/2)
};