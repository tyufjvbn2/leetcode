function generate(numRows: number): number[][] {
    const result: number[][] = []

    for(let i =0; i<numRows; i++) {
        if(i === 0) {
            result.push([1])
        }
        else {
            const newArr: number[] = []
            const base: number[] = result[i-1]

            for(let j = 0; j<=i; j++) {
                const before: number = base[j-1] || 0
                const after: number = base[j] || 0
                newArr.push(before+after)
            }

            result.push(newArr)
        }
    }

    return result

};