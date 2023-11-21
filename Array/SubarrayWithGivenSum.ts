//Subarray with Given Sum

function subArraySum(a:number[],n:number,sum:number):boolean{
    let currSumm :number=a[0];
    let start:number =0;

    for(let i:number=1; i<=n; i++){

        while(sum<currSumm && start < i- 1){
            currSumm -= a[start];
            start++;
        }
        if(currSumm===sum){
            let p = i - 1;
            console.log(`sum found beweetn indexes ${start} and ${p}`);
            return true;
        }
        if(i<n){
            currSumm = currSumm + a[i];
        }

    }
    console.log("No subarray was found");
    return false;
}

let a:number[] =[15, 2, 4, 8, 9, 5, 10, 23];
let sum:number =  23;
let n:number=a.length;

console.log(subArraySum(a,n,sum));