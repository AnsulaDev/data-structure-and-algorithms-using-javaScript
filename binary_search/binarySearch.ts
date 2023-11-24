//time complexity:log(n).
//space complexity :O(1).

function binarySearch(a:number[], x:number):number{
    let n:number = a.length;
    let low:number =0;
    let high:number = n-1

    while(low<high){
        let mid:number = Math.floor((low + high) / 2);
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

let a:number[] = [10,20,30,40,50,60,70];
let x:number = 60;

const bsearch:number = binarySearch(a,x);
console.log(`the index of binary search is ${bsearch}.`);