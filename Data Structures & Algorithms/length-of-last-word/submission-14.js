class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let count =0
        let n = s.length
       let i = n-1

        while(s.charAt(i)===" "){
            i--
        }
        

       while(i>=0 && s.charAt(i) !==' '){
        i--
        count++

       }
        return count
    }
}
