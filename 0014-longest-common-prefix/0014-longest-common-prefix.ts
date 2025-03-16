function longestCommonPrefix(strs: string[]): string {
    const intersection: string[] = strs.reduce((ini, cur, i) => {
        if(i === 0) {
            ini = cur.split("")
        }
        else {
            const arr: string[] = []
            const min: number = Math.min(cur.length, ini.length)
            for(let i = 0; i< min; i++) {
                if(cur[i] !== ini[i]) {
                    break
                }
                else {
                    arr.push(cur[i])
                }
            }
            ini = arr
        }
        return ini
    }, [])

    return intersection.join("")
};