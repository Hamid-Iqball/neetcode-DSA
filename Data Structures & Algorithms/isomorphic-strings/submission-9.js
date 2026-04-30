class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        if(s.length !== t.length) return false

        let freq1 =new Map()
        let freq2 =new Map()


        for(let i=0; i<s.length; i++){
            let c1 = s[i]
            let c2 = t[i]


            if((freq1.has(c1) && freq1.get(c1)!==c2) || 
            (freq2.has(c2) && freq2.get(c2)!==c1)
            ) {
                return false
            }


            freq1.set(c1,c2)
            freq2.set(c2,c1)

        }
            return true
    }
}
