//Valid anagram.
/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or 
phrase, typically using all the original letters exactly once.
*/

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    let countArray: number[] = Array(26).fill(0);
    for(let i=0; i<s.length;i++){
        countArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        countArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    for(let count of countArray){
        if(count !== 0){
            return false;
        }
    }
    return true;
}

let s: string = "rat"; 
let t: string = "tar";
console.log(isAnagram(s,t));