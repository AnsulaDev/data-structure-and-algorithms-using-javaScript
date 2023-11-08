// sort colors / sort 0's, 1's, 2's / Dutch national flag.

function sortColors(a){
    let low =0;
    let high = a.length - 1;
    let mid =0;
    let temp;

    while(mid <= high){
        switch(a[mid]){
            case 0:{
                temp = a[low];
                a[low] = a[mid] ;
                a[mid] = temp;
                low++;
                mid++;
                break;
            }
            case 1:{
                mid++;
                break;
            }
            case 2:{
                temp = a[mid];
                a[mid] = a[high];
                a[high] = temp;
                high--;
                break;
            }
        }
    }
    return a;

}
let a = [0,0,0,1,1,1,0,2,0,1,2,2,1];
let sortedcolors = sortColors(a);
console.log(`sorted colors are : ${sortedcolors}`);
