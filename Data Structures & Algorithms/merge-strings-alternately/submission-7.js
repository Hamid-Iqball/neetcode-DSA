class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let w1 = word1.split("")
        let w2 = word2.split("")

        let l =0
        let r =0
        let str =[]
        while(l<w1.length && r<w2.length){
            if(l<=r){
                str.push(w1[l])
               l++
            }else{
                str.push(w2[r])
                r++
            }
            
        }

        while(l<w1.length){
            str.push(w1[l])
            l++
        }

        while(r<w2.length){
            str.push(w2[r])
            r++
        }


        return str.join("")
    }
}
