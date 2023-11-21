//find the leader elements in an array.

function leader(a:number[],n:number):void{
    let curr:number = a[n-1];
    console.log(curr + " ");

    for(let i:number=n-2; i>=0; i--){
        if(curr<a[i]){
            curr = a[i];
            console.log(curr + " ");
        }
    }
}

let a:number[] = [7,10,4,10,6,5,2];
let n:number=7;
console.log("before leader:");
for(let i:number=0; i<n; i++){
    console.log(a[i] + " ");
}
console.log("current leaders are: ")
leader(a,n);
