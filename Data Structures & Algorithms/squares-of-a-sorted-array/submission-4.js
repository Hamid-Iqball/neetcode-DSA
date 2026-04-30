class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let i=0
        let j = nums.length-1
        let res = []
       
       while(i<=j){
        if(nums[i]*nums[i] > nums[j]*nums[j])
        {
            res.push(nums[i]*nums[i])
            i++
        }else{
            res.push(nums[j]*nums[j])
            j--
        }
       }

       

return res.reverse()


    }
}
