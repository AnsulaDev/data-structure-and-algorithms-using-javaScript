
function majority( a:number[], n:number):number{
        let res:number=0;
        let count:number=0;
        for(let i:number=0; i<n; i++){
            if(count===0){
                res=a[i];
            }
            if(res===a[i]){
                count++;
            }
            else{
                count--;
            }
        }
        return res;
    }

let a:number[]= [8, 8, 6, 6, 6, 4, 6];
let n:number= 7;

console.log("majority elements is: ")

console.log(majority(a, n));


