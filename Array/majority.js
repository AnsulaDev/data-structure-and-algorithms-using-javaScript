
function majority( a, n){
        let res=0, count=0;
        for(let i=0; i<n; i++){
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

let a = [8, 8, 6, 6, 6, 4, 6], n = 7;

console.log("majority elements is: ")

console.log(majority(a, n));


