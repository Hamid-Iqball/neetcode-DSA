class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
    let res = Infinity
    for(let i=0; i<nums.length; i++){
        let curSum = 0
        let j = i
        while(j<nums.length){
            curSum +=nums[j]
            if(curSum>=target){
                res = Math.min(res,  j-i+1)
                break
            }
            j++
        }

    }

    return res == Infinity ? 0 : res
    
    }
}
