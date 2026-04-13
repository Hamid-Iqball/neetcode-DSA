class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let freq1 = {}

        for(let i=0; i<nums.length ; i++){
            freq1[nums[i]] = (freq1[nums[i]] || 0) + 1
        }


        for(let val in freq1){
            if(freq1[val]  >1){
                return val
            }
        }
    }
}
