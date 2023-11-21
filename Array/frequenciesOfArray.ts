//Frequencies of sorted Array;

function printFreq(a:number[],n:number):void{
    let f: number = 1;
    let i:number =1;
    while(i<n){
        while(i<n && a[i] === a[i-1]){
            f++;
            i++;
        }
        console.log(a[i-1] + " : " + f);
        i++;
        f=1;
    }
    if(n===1 || a[n-1] != a[n-2]){
        console.log(a[n-1] + " : " +  1);
    }
}

let a:number[] = [10,10,10,30,30,40];
let n:number=6;
console.log("frequeces of the array is: ")
console.log(printFreq(a,n));