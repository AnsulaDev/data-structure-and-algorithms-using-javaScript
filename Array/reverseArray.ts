//reverse array using swaping algorithm.

function reverseArray(a:number[], n:number):void{
    let low:number = 0;
    let high:number = n - 1;

    while (low < high) {
        let temp:number = a[low];
        a[low] = a[high];
        a[high] = temp;
        low++;
        high--; 
    }
}

let a:number[] = [30, 4, 3, 6, 73, 6];
let n:number = a.length
reverseArray(a, n);
console.log(a);
