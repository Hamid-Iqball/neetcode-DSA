class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let counter ={}

        for(let val of strs){
          let sorted = val.split('').sort().join()
           if(!counter[sorted]){
            counter[sorted] =[]
           }
           counter[sorted].push(val)
        }

        return Object.values(counter)
    }
}
