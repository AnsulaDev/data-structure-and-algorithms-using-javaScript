//Right rotation of an array.

function rightRotation(a:number[],n:number):void{
    let res:number = a[n-1];
    for(let i:number=n-2; i>=0; i--){
        a[i+1] = a[i];
        
    }
    a[0] = res;
}

let a:number[] =[1,2,3,4,5,6];
let n:number=a.length;
console.log("Array after right rotation:");
rightRotation(a,n)
console.log(a);