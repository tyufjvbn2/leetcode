function findPeaks(mountain: number[]): number[] {
    /* first logic */
    let mid: number = 0
    const result: number[] = []

    mountain.forEach((e: number, i: number) => {
        // skip init
        if(i === 0 || i === 1) {
            mid = e || mid
            return
        }

        // skip plain
        if (e === mid) {
            return
        }

        else if(e < mid) {
            if(mountain[i-2] >= mid) {
                mid = e
                return
            }
            else {
                if(!mountain[i-2]) {
                    return
                }
                result.push(i-1)
            }
        }
        else if(e > mid) {
            mid = e
        }
    })

    return result

    /** best practice logic */
    // for (let i = 1; i < mountain.length - 1; i++) {
    //     if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
    //         result.push(i);
    //     }
    // }
    // return result
};