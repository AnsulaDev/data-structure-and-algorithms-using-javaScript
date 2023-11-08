// plus one problem
/* You are given a large integer represented as an integer array digits, where each digits[i] is 
the ith digit of the integer. The digits are ordered from most significant to least significant in 
left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.*/



function plusOne(a) {
    let n= a.length;
    for(let i= n-1; i>=0; i--){
        if(a[i]<9){
            a[i]++;
            return a;
        }
        else{
            a[i] = 0;
        }
    }
    let myNum = new Array(n+1);
        myNum[0] = 1;
        return myNum;
}

let a = [4,3,2,1];
console.log(plusOne(a));