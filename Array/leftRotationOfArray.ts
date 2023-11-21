// left rotation of an Array.
function leftRotate(a:number[], n:number):number[]{
    let res:number = a[0];
    for(let i:number=1; i<n;i++){
        a[i-1] = a[i];
    }
    a[n-1] = res;
    return a;
}
let a:number[] =[1,2,3,4,5,6];
let n:number=a.length;
console.log("Array after left rotation:");
console.log(leftRotate(a,n));