class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count = {}
        let n =nums.length
        let result =[]
        for(let val of nums){
            count[val] = (count[val] || 0) +1

        }


    for(let key in count){
        if(count[key]>n/3){
            result.push(Number(key))
        }
    }

        return result


    }
}
