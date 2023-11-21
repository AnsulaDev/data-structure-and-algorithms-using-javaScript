function prefix(a:number[],n:number):number[]{
    let prefix_sum:number[] = new Array(n)
    prefix_sum[0] = a[0];
    for(let i:number=1; i<n;i++){
        prefix_sum[i] = prefix_sum[i-1] + a[i];
    }
    return prefix_sum;
}



function getSum(prefixSum:number[], l:number, r:number):number{
    if(l!=0){
        return prefixSum[r] - prefixSum[l-1];
    }
    else{
        return prefixSum[r];
    }
}

let a:number[] = [2,8,3,9,6,5,4];
let n:number=7;

let prefixSum:number[] = prefix(a,n);


console.log(getSum(prefixSum, 1, 3));
console.log(getSum(prefixSum, 0, 2));