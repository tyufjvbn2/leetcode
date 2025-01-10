function numJewelsInStones(jewels: string, stones: string): number {
    let count:number = 0
    for(let str of stones) {
        if(jewels.includes(str)) {
            count ++;
        }
    }
    return count
};