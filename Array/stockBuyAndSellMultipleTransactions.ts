//stock buy and sells for mulitple transactions.
function maxProfitMultipleTransactions(prices:number[]):number {
    let maxProfit:number = 0;
    for (let i:number = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
}

let prices:number[] = [1, 5, 3, 8, 12];
console.log(`Maximum profit will be ${maxProfitMultipleTransactions(prices)}`);
