class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for(let s of strs){
            const codsrt = s.split('').sort().join("")

            if(!res[codsrt]){
                res[codsrt] = [s]
            }else{


            res[codsrt].push(s)
            }
        }


        return Object.values(res)
    
    }
}
