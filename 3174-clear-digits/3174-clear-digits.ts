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

    /**
     * best time complexity case

    const output: string[] = [];
    let digitCount = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!isNaN(parseInt(s[i]))) {
            digitCount++;
        } else if (digitCount > 0) {
            digitCount--;
        } else {
            output.push(s[i]);
        }
    }
    return output.reduce((str, char) => char + str, '');
     */
};