class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n = nums.length
        let index =1
        for(let j=1; j<n; j++){
            if(nums[j]!==nums[j-1]){
                nums[index] = nums[j]
                index++
            }
        }
        return index
    }
}
