class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n =nums.length
        let k=1;
        for(let j=1; j<n; j++){
           if(nums[j]!==nums[j-1]){
            nums[k] = nums[j]
            k++
           }
        }

        return k
    }
}
