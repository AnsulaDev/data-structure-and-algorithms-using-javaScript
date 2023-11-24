//time complexity:log(n).
//space complexity :O(1).

function indexOf(a: number[], x: number):number {
    let n: number = a.length;
    let low:number = 0;;
    let high: number = n-1;

    while(low<high){
        let mid:number = Math.floor((low + high)/2);
        if(a[mid] >x){
            high = mid -1;
        }
        else if(a[mid] < x){
            low = mid + 1;
        }
        else{
            if(mid===0 || a[mid - 1] != x){
                return mid;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return -1;
}


let a: number[] = [5, 10, 10, 15, 20, 20, 20];
let x: number = 15;
let occurrence: number = indexOf(a, x);
console.log(`Index of occurrence is: ${occurrence}`);
