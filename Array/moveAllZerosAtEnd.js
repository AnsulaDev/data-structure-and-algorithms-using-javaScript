//move all zeros at end.
function moveZero(a){
    let count =0;

    for(let i=0; i<a.length; i++){
        if(a[i] !=0){
            let temp = a[count];
            a[count] = a[i];
            a[i]=temp;
            count++;
        }
    }
}
var a =[1,2,3,0,6,0,9,8,0];

console.log("after moving all zeros at end:");
moveZero(a);

console.log(a);

