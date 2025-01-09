function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const result: number[] = []
    // index object
    const table: object = {}

    // get common number by for loop
    for (let i = 0; i < A.length; i++) {
        const aNum: number = A[i]
        const bNum: number = B[i]
        let pushNum: number = 0

        // add number in index obj
        table[aNum] = table[aNum] ? table[aNum] + 1 : 1
        table[bNum] = table[bNum] ? table[bNum] + 1 : 1

        // case 1 : first index
        if (i === 0) {
            pushNum = aNum === bNum ? 1 : 0
        }
        else {
            // get common number from obj
            const numCountArr: number[] = Object.values(table).sort((a, b) => b - a)
            // get biggest
            const biggest: number = numCountArr[0]
            // calculate equal number with biggest
            pushNum = biggest === 1 ? 0 : numCountArr.lastIndexOf(numCountArr[0]) + 1
        }
        result.push(pushNum)
    }

    return result
};