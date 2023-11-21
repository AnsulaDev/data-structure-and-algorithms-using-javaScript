//using kadence algorithm.
function maxSubArraySum(a:number[], n:number):number {
    let res:number = a[0];
    let maxEnding:number = a[0];
    
    for (let i:number = 1; i < n; i++) {
        maxEnding = Math.max(maxEnding + a[i], a[i]);
        res = Math.max(res, maxEnding);
    }
    return res;
}

let a:number[] = [ 2,3,-8,7,-1,2,3 ];
console.log(maxSubArraySum(a, a.length));
