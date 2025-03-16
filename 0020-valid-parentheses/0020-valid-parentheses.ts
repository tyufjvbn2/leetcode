function isValid(s: string): boolean {
    const arr: string[] = s.split("")
    const compare: string[] = []

    for(let i = 0; i < arr.length; i++) {
        if(compare.length === 0) {
            if(arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
                compare.push(arr[i])
                break
            }
        }
        if(arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
            compare.push(arr[i])
        }
        else {
            if(arr[i] === ")" && compare[compare.length-1] !== "(") {
                break;
            }
            if(arr[i] === "}" && compare[compare.length-1] !== "{") {
                break;
            }
            if(arr[i] === "]" && compare[compare.length-1] !== "[") {
                break;
            }
            compare.pop()
        }
    }

    return compare.length ? false : true
};