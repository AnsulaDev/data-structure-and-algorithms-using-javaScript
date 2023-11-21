// maximum consecutive 1's.

function maxConsecutive(a:number[],n:number):number{
    let res:number =0;
    let curr:number =0;
    for(let i:number=0; i<n; i++){
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

let a:number[] = [0,1,1,0,1,0];
let n:number = a.length;

console.log("maximum consecutive 1's is: ")
console.log(maxConsecutive(a,n));