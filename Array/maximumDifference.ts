// find the maximum difference in an array;

function maxDifference(a:number[], n:number):number{
    let res:number = a[1] -a[0];
    let minVal:number = a[0];
    for(let i:number=1;i<n; i++){
        res = Math.max(res,a[i] - minVal);
        minVal =Math.min(minVal,a[i]);
    }
    return res;

}

let a:number[] =[2,3,10,6,4,8,1];
let n:number=7;
let maxdiff:number = maxDifference(a,n);
console.log("Maximum difference of the array is: ")
console.log(maxdiff);