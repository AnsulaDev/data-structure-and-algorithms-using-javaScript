//a majority elements has to appear more than n/2 times.

function appearMajority(a:number[], n:number):number{
    let count:number=0, res:number=0;

    for(let i:number=0; i<n; i++){
        if(count==0){
            res=a[i];
        }
        if(res==a[i]){
            count++;
        }
        else{
            count--;
        }

    }
    return res;
}


let a:number[] = [7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5];
let n:number = a.length

console.log(appearMajority(a,n));