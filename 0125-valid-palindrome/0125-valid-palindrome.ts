function isPalindrome(s: string): boolean {
    function isLetter(str: string): boolean {
        return !!str.match(/^[a-z0-9]+$/i);
    }

    const pureAlpha: string = s.split("").reduce((joined, char) => {
        if(isLetter(char)) {
            joined += char.toLowerCase()
        }
        return joined
    }, "")

    if(pureAlpha.length%2) {
        const mid: number = Math.floor(pureAlpha.length/2)
        const front: string = pureAlpha.slice(0, mid)
        const back: string = pureAlpha.substring(mid+1)

        const reverseBack: string = back.split("").reverse().join("")

        return front === reverseBack ? true : false
    }
    else {
        const front: string = pureAlpha.slice(0, pureAlpha.length/2)
        const back: string = pureAlpha.substring(pureAlpha.length/2)

        const reverseBack: string = back.split("").reverse().join("")

        return front === reverseBack ? true : false
    }
};