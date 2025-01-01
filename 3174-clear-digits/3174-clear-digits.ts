function clearDigits(s: string): string {
    // get string array
    const sArr = s.split("")

    // calculate num index and string index and delete
    const result: string = sArr.reduce((trunc: string, el: string) => {
        if(!isNaN(parseInt(el))) {
            const i: number = trunc.search(el)
            const first: string = trunc.slice(0, i-1)
            const second: string = trunc.slice(i+1)
            trunc = first + second
        }
        return trunc
    }, s)

    return result
};