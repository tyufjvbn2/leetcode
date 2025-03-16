function romanToInt(s: string): number {
    let result: number = 0
    const dic: object = {
        "M": 1000, 
        "D": 500, 
        "C": 100, 
        "L": 50, 
        "X": 10, 
        "V": 5, 
        "I": 1
    }
    const dicKey: string[] = Object.keys(dic)
    for(let i = 0; i < s.length; i++) {
        const current: number = dic[s[i]]
        
        if(!s[i+1]) {
            result += current
        }
        else {
            if(dicKey.indexOf(s[i]) > dicKey.indexOf(s[i+1])) {
                const next: number = dic[s[i+1]]
                result = result + next - current
                i++
            }
            else {
                result += current
            }
        }
    }

    return result
};