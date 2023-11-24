//time complexity:log(n).
//space complexity :O(1).

function count(a:number[]):number{
    let n:number=a.length;
    let low:number=0;
    let high:number= n-1;

    while(low<=high){
        let mid:number = Math.floor((low + high)/2);
        if(a[mid] === 0){
            low = mid + 1;
        }
        else{
            if(mid===0 || a[mid-1]===0){
                return n-mid;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return 0;
}
let a: number[] = [0,0,1,1,1,1,1];
const occ = count(a);
console.log(`occurence of counts 1 is : ${occ}`);