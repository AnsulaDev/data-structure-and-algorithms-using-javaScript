//using kadence algorithm.
function maxSubArraySum(a, n) {
    let res = a[0];
    let maxEnding = a[0];
    
    for (let i = 1; i < n; i++) {
        maxEnding = Math.max(maxEnding + a[i], a[i]);
        res = Math.max(res, maxEnding);
    }
    return res;
}

var a = [ 2,3,-8,7,-1,2,3 ];
console.log(maxSubArraySum(a, a.length));
