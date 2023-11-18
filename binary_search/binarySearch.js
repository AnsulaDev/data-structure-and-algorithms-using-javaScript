function binarySearch(a, x){
    let n = a.length;
    let low =0;
    let high = n-1

    while(low<high){
        let mid = Math.floor((low + high) / 2);
        if(a[mid] === x){
            return mid;
        }
        else if(a[mid]>x){
            high = mid-1;
        }
        else{
            low=mid+1
        }
    }
    return -1;
}

let a = [10,20,30,40,50,60,70];
let x = 60;

const bsearch = binarySearch(a,x);
console.log(`the index of binary search is ${bsearch}.`);