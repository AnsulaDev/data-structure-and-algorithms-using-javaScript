// two sum problem using window sliding algorithm, implemented using hashmap.
function twoSum(a, t) {
    let map = new Map();
    for(let i = 0; i < a.length; i++){
        let complement = t - a[i];

        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(a[i], i);
    }
    return a;
}


let a = [2,7,11,15];
let t =  9;
console.log(twoSum(a,t));