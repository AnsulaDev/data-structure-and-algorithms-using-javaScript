// find the maximum difference in an array;

function maxDifference(a, n){
    let res = a[1] -a[0];
    let minVal = a[0];
    for(let i=1;i<n; i++){
        res = Math.max(res,a[i] - minVal);
        minVal =Math.min(minVal,a[i]);
    }
    return res;

}

let a =[2,3,10,6,4,8,1];
let n=7;
let maxdiff = maxDifference(a,n);
console.log("Maximum difference of the array is: ")
console.log(maxdiff);