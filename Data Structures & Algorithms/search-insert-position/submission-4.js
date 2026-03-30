class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let start = 0
        let end = nums.length-1


        let middle = Math.floor((start+end)/2)
        while(start<=end){
            if(nums[middle]===target){
                return middle
            }

            if(nums[middle]<target){
                start = middle+1
            }else{
                end= middle-1
            }

            middle = Math.floor((start+end)/2)
        }

        return middle+1
    }
}
