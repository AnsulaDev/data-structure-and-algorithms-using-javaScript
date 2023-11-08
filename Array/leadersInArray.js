//find the leader elements in an array.

function leader(a,n){
    let curr = a[n-1];
    console.log(curr + " ");

    for(let i=n-2; i>=0; i--){
        if(curr<a[i]){
            curr = a[i];
            console.log(curr + " ");
        }
    }
}

var a = [7,10,4,10,6,5,2];
let n=7;
console.log("before leader:");
for(let i=0; i<n; i++){
    console.log(a[i] + " ");
}
console.log("current leaders are: ")
leader(a,n);
