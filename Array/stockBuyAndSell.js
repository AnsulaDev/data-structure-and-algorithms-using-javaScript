//stock buy and sells.
function stockBuyAndSell(a, n) {
    let minP = a[0];
    let maxP = 0;
    for (let i = 1; i < n; i++) { 
        minP = Math.min(minP, a[i]);
        let profit = a[i] - minP;
        maxP = Math.max(maxP, profit);
    }
    return maxP;
}

var a = [1, 5, 3, 8, 12];

console.log(`Maximum profit will be ${stockBuyAndSell(a, a.length)}`);
