/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    // with method
    // s.reverse()

    // other way
    const newArr: string[] = []
    for(let i = 0; i<s.length/2; i++) {
        const el: string = s[i]
        s[i] = s[s.length -1 - i]
        s[s.length-1 -i] = el
    }
};