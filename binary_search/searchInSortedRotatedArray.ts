//Search in Sorted Rotated Array.
//time complexity:log(n).
//space complexity :O(1).

function rotated(a:number[],n:number, x:number):number{
    let low:number =0;
    let high:number= n-1;
    while(low<=high){
        let mid:number = Math.floor((low + high)/2);

        if(a[mid] == x){
            return mid;
        }
        else if(a[low]<a[mid]){
            if(x>=a[low] && x<a[mid]){
                high = mid -1;
            }
            else{
                low=mid + 1;
            }
        }
        else{
            if(x>a[mid] && x<=high){
                low=mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return -1;
}
let a:number[] = [10, 20, 40, 60, 5, 8]; 
let n:number = 6;
let x:number = 5;

console.log(rotated(a, n, x));
