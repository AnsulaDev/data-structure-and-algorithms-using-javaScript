// Remove duplicates from sorted array.

function remove(a){
    let res = 1;
    for(let i=1; i<a.length;i++){
        if(a[i] != a[i-1]){
            a[res] = a[i];
            res++;
        }
    }
    return res;
}

var a = [10,20,20,30,30,40];
var r=remove(a);
console.log("array after removing duplicates: ");
for(var i=0; i<r; i++){
    console.log(a[i] + " ") ;
}

