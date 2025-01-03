function maxCount(m: number, n: number, ops: number[][]): number {
    const max: number = m * n

    // early return
    if (ops.length === 0) {
        return max
    }

    /* dead logic
    // create default field
    let field: number[][] = Array(n).fill(Array(m).fill(0))

    // matrix addition function
    function arrAdd(big: number[][], small: number[][]) {
        const result: number[][] = big.map((row: number[]) => [...row])

        for (let i = 0; i < small.length; i++) {
            for (let j = 0; j < small[i].length; j++) {
                result[i][j] += small[i][j];
            }
        }

        return result
    }

    // add matrix
    ops.forEach((e: number[]) => {
        const hor: number = e[0]
        const ver: number = e[1]

        // create small matrix
        const part: number[][] = Array(ver).fill(Array(hor).fill(1))

        field = arrAdd(field, part)
    })

    // calculate count
    const flat: number[] = field.flat()
    const maxNum: number = Math.max(...flat)
    const result: number = flat.reduce((sum: number, n: number) => {
        return sum + (n === maxNum ? 1 : 0);
    }, 0)

    return result
    */

    // calculate minimum size of field
    const matrix: number[] = ops.reduce((mat: number[], val: number[]) => {
        mat[0] = mat[0] ? Math.min(mat[0], val[0]) : val[0]
        mat[1] = mat[1] ? Math.min(mat[1], val[1]) : val[1]
        // mat[1] = mat[1] || Math.min(mat[1], val[1])
        return mat
    },[null,null])

    return matrix[0] * matrix[1]
};