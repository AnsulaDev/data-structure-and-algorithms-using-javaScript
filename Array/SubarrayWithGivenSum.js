//Subarray with Given Sum

function subArraySum(a,n,sum){
    let currSumm =a[0];
    let start =0;

    for(let i=1; i<=n; i++){

        while(sum<currSumm && start < i- 1){
            currSumm -= a[start];
            start++;
        }
        if(currSumm==sum){
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

var a =[15, 2, 4, 8, 9, 5, 10, 23];
var sum =  23;
var n=a.length;

console.log(subArraySum(a,n,sum));