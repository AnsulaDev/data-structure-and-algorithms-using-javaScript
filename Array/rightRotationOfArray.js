//Right rotation of an array.

function rightRotation(a,n){
    let res = a[n-1];
    for(let i=n-2; i>=0; i--){
        a[i+1] = a[i];
        
    }
    a[0] = res;
}

var a =[1,2,3,4,5,6];
let n=a.length;
console.log("Array after right rotation:");
rightRotation(a,n)
console.log(a);