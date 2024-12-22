function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    // // case 1 : empty array or fn return same result
    // const len = arr.length
    // if(len === 0) {
    //     return arr
    // }

    // // case 2 : check same result
    // let tester = fn()
    // if(typeof tester === number) {
    //     const newArr = arr.map(() => fn())
    //     return newArr
    // }

    // // case 2 : check fn related on index
    // const calcArr = arr.map(fn) 

    // // case 3 : check fn related on adding integer
    // if(len === 1) {
    //     return 
    // }
    // tester = fn()
    // let tester2 = fn(2)
    // let tester3 = fn(3)
    // if() {

    // }
    
    // use map
    return arr.map(fn)
};