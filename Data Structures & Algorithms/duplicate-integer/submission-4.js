class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let frquenceyCounter = {}
  
    
       for(let val of nums){
        frquenceyCounter[val] = (frquenceyCounter[val]||0)+1
       }


        for(let key in frquenceyCounter){
            if(frquenceyCounter[key]>1){
                return true
            }
        }

        return false
    }
}
