//using window sliding technique.

function maxSumSubArray(a:number[],k:number,n:number):number {
    let curr:number=0;
    for(let i:number=0; i<k; i++){
        curr += a[i];
    }

    let maxSum:number = curr;
    for(let i:number=k; i<n; i++){
        curr += (a[i] - a[i-k]);
        maxSum = Math.max(maxSum, curr);
    }
    return maxSum;

}

var a:number[]=[1, 8, 30, -5, 20, 7];
let k:number=3;
let n:number=6;
console.log(`maximum sum of sub array is:${maxSumSubArray(a,k,n)}`);