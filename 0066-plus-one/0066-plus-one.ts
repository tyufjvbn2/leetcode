function plusOne(digits: number[]): number[] {
    // const strNum: string = digits.join("")

    // const addedNum: number = parseInt(strNum) +1
    // const addedStrNum: string = addedNum.toString()

    // const result: number[] = []
    // for(let i=0; i<addedStrNum.length; i++) {
    //     result.push(parseInt(addedStrNum[i]))
    // }
    // return result

    let adder: number = 1

    for(let i= digits.length-1; i>=0; i--) {
        if(adder === 0) {
            break
        }
        else {
            if(digits[i] !== 9) {
                digits[i] = digits[i] + adder
                adder = 0
            }
            else {
                digits[i] = 0
            }
        }
    }

    if(adder === 1) {
        digits.unshift(adder)
    }

    return digits
};