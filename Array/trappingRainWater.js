// trapping rain water.

function trappingRain(a){
    let n = a.length;
    let res =0;
    let lmax=[n];
    let rmax=[n];
    
    for(let i=1;i<n;i++){
        lmax[i] = Math.max(a[i],lmax[i-1]);
    }  
    rmax[n-1] = a[n-1];
        
    for(let i=n-2; i>=0;i--){
        rmax[i] = Math.max(a[i],rmax[i+1]);
    }
    for(let i =1; i<n-1;i++){
        res = res + ( Math.min(lmax[i],rmax[i] - a[i]));
    }
    return res;
}

var a = [5,0,6,2,3];

console.log(`Maximum rain can be stored ${trappingRain(a)}`);