//maximum length of Evens and odds in subarray using kadence algorithm.
//it has to be even,odd,even,odd,etc........

function evenAndOdd(a:number[], n:number):number { 
    let res:number=1;
    let curr:number=1;
    for(let i:number=1;i<n; i++){
        if((a[i]%2 ===0 && a[i-1]%2 !=0) || (a[i]%2 !=0 && a[i-1]%2 ===0)){
            curr++;
            res = Math.max(res,curr);
        }
        else{
            curr=1;
        }
    }
    return res;
}

let a:number[] =[5,10,20,6,3,8];
let n:number=a.length;

console.log("maximum length of even and odd is: ");
console.log(evenAndOdd(a,n));