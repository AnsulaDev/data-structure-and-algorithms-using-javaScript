//using window sliding technique.

function maxSumSubArray(a,k,n){
    let curr=0;
    for(let i=0; i<k; i++){
        curr += a[i];
    }

    let maxSum = curr;
    for(let i=k; i<n; i++){
        curr += (a[i] - a[i-k]);
        maxSum = Math.max(maxSum, curr);
    }
    return maxSum;

}

var a=[1, 8, 30, -5, 20, 7];
let k=3;
let n=6;
console.log(`maximum sum of sub array is:${maxSumSubArray(a,k,n)}`);