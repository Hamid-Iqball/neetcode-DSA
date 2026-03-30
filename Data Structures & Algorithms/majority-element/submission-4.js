class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count ={}
        let n = nums.length
        let i=0
        while(i<n){
            count[nums[i]] = (count[nums[i]] || 0) + 1
        if(count[nums[i]]>=n/2){
            return nums[i]
        }
            i++
        }

      
    }
}
