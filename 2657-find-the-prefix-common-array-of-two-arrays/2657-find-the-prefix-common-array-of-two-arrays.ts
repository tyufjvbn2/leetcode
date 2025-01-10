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

    /** best practice */
    // const povtor = new Array(A.length + 1).fill(0); // compare array
    // const result = [];
    // let count = 0;

    // for(let i = 0; i < A.length; i++) {
    //     povtor[A[i]]++; // make index as number and element is count of its number
    //     povtor[B[i]]++;

    //     if(A[i] === B[i]) {
    //         count++;    // when the number of each array is same, add 1 on count
    //     } else {
    //         if(povtor[A[i]] === 2) count++; // in compare array, count of number is 2, add 1
    //         if(povtor[B[i]] === 2) count++;
    //     }

    //     result.push(count)
    // }
    // return result
};