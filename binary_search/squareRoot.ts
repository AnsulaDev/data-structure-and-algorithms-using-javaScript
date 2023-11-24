function squareRoot(x:number) :number {
    let low =1;
    let high = x;
    let ans = -1;
    while(low<=high){
        let mid:number = Math.floor((low + high)/2);
        let sqt:number = mid * mid;
        if(sqt ==x){
            return mid;
        }
        else if(sqt>x){
            high =  mid -1;
        }
        else{
            low = mid + 1;
            ans = mid;
        }
    }
    return ans;
}
console.log(squareRoot(25));