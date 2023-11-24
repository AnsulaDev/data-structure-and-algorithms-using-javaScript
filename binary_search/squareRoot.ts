//Square root.
//In this problem, we are presented with a number, and our objective is to utilize binary search to determine the floor value of its square root in logarithmic complexity.
//time complexity:log(n).
//space complexity :O(1).


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