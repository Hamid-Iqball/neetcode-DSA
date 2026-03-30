class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false

        let obj ={}
      

        for(let val of s){
            obj[val] = (obj[val]||0)+1
        }

        
        for(let char of t){
            if(!obj[char]){
                return false
            }
            
            obj[char]--
        }

        return true
        
    }
}
