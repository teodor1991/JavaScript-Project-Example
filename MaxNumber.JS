function maxNumber(args){
    let n = Number(args[0]);
    let max = Number.NEGATIVE_INFINITY;
    

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (currentNum > max) {
            max = currentNum;
        }
    
    }
            console.log(max);
}
    maxNumber(['4', '-45', '-20', '-7', '99']);
