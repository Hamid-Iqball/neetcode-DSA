class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0
        let count =0
        for(let i=0; i<nums.length; i++){
            if(nums[i]===1){
                count++
            }else{
                count =0
            }
                maxCount = Math.max(count, maxCount)
        }

        return maxCount
    }
}
