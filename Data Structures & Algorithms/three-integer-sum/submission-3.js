class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let arr  = nums.sort((a,b)=>a-b)
        let  result =[]

        for(let i=0; i<arr.length; i++){
        
          if(arr[i]>0) break

          if(i>0 && arr[i] === arr[i-1]) continue

          let j = i+1
          let  k = arr.length-1
          while(j<k){
            let sum = arr[i] + arr[j] +arr[k]

            if(sum<0){
              j++
            }else if(sum>0){
              k--
            }else{
              result.push([arr[i], arr[j] , arr[k]])
              j++
              k--
              while(j<k && arr[j] ===arr[j-1]){
                j++
              }
            }
          }
        }
        return result
    }
}
