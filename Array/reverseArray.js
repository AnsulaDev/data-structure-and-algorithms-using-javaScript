//reverse array using swaping algorithm.

function reverseArray(a, n) {
    let low = 0;
    let high = n - 1;

    while (low < high) {
        let temp = a[low];
        a[low] = a[high];
        a[high] = temp;
        low++;
        high--; 
    }
}

var a = [30, 4, 3, 6, 73, 6];
reverseArray(a, a.length);
console.log(a);
