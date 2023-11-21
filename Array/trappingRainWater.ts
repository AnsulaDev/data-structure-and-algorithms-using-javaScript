// trapping rain water.

function trappingRain(a:number[]):number{
    let n:number = a.length;
    let res:number =0;
    let lmax:number[]=[n];
    let rmax:number[]=[n];
    
    for(let i:number=1;i<n;i++){
        lmax[i] = Math.max(a[i],lmax[i-1]);
    }  
    rmax[n-1] = a[n-1];
        
    for(let i:number=n-2; i>=0;i--){
        rmax[i] = Math.max(a[i],rmax[i+1]);
    }
    for(let i:number =1; i<n-1;i++){
        res = res + ( Math.min(lmax[i],rmax[i] - a[i]));
    }
    return res;
}

let a:number[] = [5,0,6,2,3];

console.log(`Maximum rain can be stored ${trappingRain(a)}`);