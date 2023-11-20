//Array left rotation by "D".
function reverse(a, low, high) {
    while (low < high) {
        var temp = a[low];
        a[low] = a[high];
        a[high] = temp;
        low++;
        high--;
    }
}
function leftRotation(a, d, n) {
    reverse(a, 0, d - 1);
    reverse(a, d, n - 1);
    reverse(a, 0, n - 1);
}
var a = [1, 2, 3, 4, 5, 6];
var n = a.length;
var d = 3;
console.log("Array after left rotation by D position:");
leftRotation(a, n, d);
console.log(a);
