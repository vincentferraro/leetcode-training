
function merge(w1, w2){
    let arr = []
    let j =0, i=0;
    while(j< w1.length || i < w2.length){
        if(w1[j]!= null){
            arr.push(w1[j])
            j +=1;
        }
        if(w2[i]!= null){
            arr.push(w2[i])
            i +=1;
        }
    }
    return arr.join('')
}

const word = merge("Hello", "worlds")

console.log(word);


 // BEST SOLUTION
var mergeAlternately = function(word1, word2) {
    let result =''
    let i =0;
    while(i< word1.length || i < word2.length){
        if(i< word1.length){ result+=word1[i]}
        if(i< word2.length){ result+=word2[i]}
        i++
    }
    return result
};