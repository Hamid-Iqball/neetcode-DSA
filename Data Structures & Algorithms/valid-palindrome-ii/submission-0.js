class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l =0
        let r = s.length-1
        while(l<r){
            
                if(s[l]!==s[r]){
                    return(
                        this.isPlaindrom(s,l+1,r) ||
                        this.isPlaindrom(s,l,r-1)
                    )
                
            }
            l++
            r--

        }
        return true

    }

        isPlaindrom(s,l,r){
            while(l<r){
                if(s[l]!==s[r]){
                    return false;
                }
                l++
                r--
            }

            return true
        }

    
}
