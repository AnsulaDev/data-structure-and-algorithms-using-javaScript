// left rotation of an Array.
function leftRotate(a, n){
    let res = a[0];
    for(let i=1; i<n;i++){
        a[i-1] = a[i];
    }
    a[n-1] = res;
}
var a =[1,2,3,4,5,6];
let n=a.length;
console.log("Array after left rotation:");
leftRotate(a,n)
console.log(a);