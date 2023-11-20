//Array left rotation by "D".

function reverse(a:number[],low:number,high:number):void {

    while (low < high) {
        let temp:number = a[low];
        a[low] = a[high];
        a[high] = temp;
        low++;
        high--; 
    }
}

function leftRotation(a:number[],d:number,n:number):void{
    reverse(a,0,d-1);
    reverse(a,d,n-1);
    reverse(a,0,n-1);

}

let a: number[] =[1,2,3,4,5,6];
let n:number =a.length;
let d :number= 3;

console.log("Array after left rotation by D position:");
leftRotation(a,n,d);
console.log(a);