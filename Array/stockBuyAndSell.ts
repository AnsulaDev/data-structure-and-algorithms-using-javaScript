//stock buy and sells.
function stockBuyAndSell(a:number[], n:number):number {
    let minP:number = a[0];
    let maxP:number = 0;
    for (let i:number = 1; i < n; i++) { 
        minP = Math.min(minP, a[i]);
        let profit = a[i] - minP;
        maxP = Math.max(maxP, profit);
    }
    return maxP;
}

let a:number[] = [1, 5, 3, 8, 12];

console.log(`Maximum profit will be: ${stockBuyAndSell(a, a.length)}`);
