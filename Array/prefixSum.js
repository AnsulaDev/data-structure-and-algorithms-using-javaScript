function prefix(a,n){
    let prefix_sum= new Array(n)
    prefix_sum[0] = a[0];
    for(let i=1; i<n;i++){
        prefix_sum[i] = prefix_sum[i-1] + a[i];
    }
    return prefix_sum;
}



function getSum(prefixSum, l, r){
    if(l!=0){
        return prefixSum[r] - prefixSum[l-1];
    }
    else{
        return prefixSum[r];
    }
}

var a = [2,8,3,9,6,5,4];
var n=7;

let prefixSum = prefix(a,n);


console.log(getSum(prefixSum, 1, 3));
console.log(getSum(prefixSum, 0, 2));