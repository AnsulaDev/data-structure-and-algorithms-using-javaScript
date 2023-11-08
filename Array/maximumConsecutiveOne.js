// maximum consecutive 1's.

function maxConsecutive(a,n){
    let res =0;
    let curr =0;
    for(let i=0; i<n; i++){
        if(a[i] === 0){
            curr =0;
        }
        else{
            curr++;
            res = Math.max(res,curr);
        }
    }
    return res;
}

let a = [0,1,1,0,1,0];
let n = a.length;

console.log("maximum consecutive 1's is: ")
console.log(maxConsecutive(a,n));