//maximum length of Evens and odds in subarray using kadence algorithm.
//it has to be even,odd,even,odd,etc........

function evenAndOdd(a, n){
    let res=1;
    let curr=1;
    for(let i=1;i<n; i++){
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

let a =[5,10,20,6,3,8];
let n=a.length;

console.log("maximum length of even and odd is: ");
console.log(evenAndOdd(a,n));