//move all zeros at end.
function moveZero(a:number[]):void{
    let count:number =0;

    for(let i:number=0; i<a.length; i++){
        if(a[i] !=0){
            let temp:number = a[count];
            a[count] = a[i];
            a[i]=temp;
            count++;
        }
    }
}
var a:number[] =[1,2,3,0,6,0,9,8,0];

console.log("after moving all zeros at end:");
moveZero(a);

console.log(a);

