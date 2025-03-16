function longestCommonPrefix(strs: string[]): string {
    const intersection: string[] = strs.reduce((ini, cur, i) => {
        if(i === 0) {
            ini = cur.split("")
        }
        else {
            ini = cur.split("").filter((el, i) => el === ini[i])
        }
        return ini
    }, [])

    return intersection.join("")
};