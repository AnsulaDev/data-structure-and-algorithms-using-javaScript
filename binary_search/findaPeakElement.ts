//A peak element is an element whose neighbors have value smaller than that of the element. 
//time complexity:log(n).
//space complexity :O(1).


function  peakElement(a:number[],n:number):number{
    let low:number = 0;
    let high: number = n-1;
    while( low<=high){
        let mid:number = (low + high)/2;
        if((mid===0 || a[mid-1] <=a[mid] ) && (mid===n-1 || a[mid+1]<=a[mid] )){
            return mid;
        }
        if(mid>0 && a[mid-1]>=a[mid]){
            high= mid - 1;
        }
        else{
            low= mid + 1;
        }
    }
    return -1;
}

let a:number[] = [5, 20, 40, 30, 20, 50, 60];
let n:number = 7;
console.log(peakElement(a,n));