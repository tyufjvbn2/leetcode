function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false
    }

    const sArr: string[] = s.split("")
    const tArr: string[] = t.split("")

    for(let i = 0; i<sArr.length; i++) {
        const target: string = sArr[i]
        const targetI: number = tArr.indexOf(target)

        if(targetI === -1) {
            return false
            break;
        }
        else {
            tArr.splice(targetI, 1)
        }
    }

    return true
};