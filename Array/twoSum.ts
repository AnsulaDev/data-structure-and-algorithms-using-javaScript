// two sum problem , implemented using hashmap.
function twoSum(a:number[], t:number) {
    let map = new Map();
    for(let i:number = 0; i < a.length; i++){
        let complement:number = t - a[i];

        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(a[i], i);
    }
    return a;
}


let a:number[] = [2,7,11,15];
let t:number =  9;
console.log(twoSum(a,t));