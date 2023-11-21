// Remove duplicates from sorted array.

function remove(a:number[]):number{
    let res:number = 1;
    for(let i:number=1; i<a.length;i++){
        if(a[i] != a[i-1]){
            a[res] = a[i];
            res++;
        }
    }
    return res;
}

let a:number[] = [10,20,20,30,30,40];
let r:number=remove(a);
console.log("array after removing duplicates: ");
for(let i:number=0; i<r; i++){
    console.log(a[i] + " ") ;
}

