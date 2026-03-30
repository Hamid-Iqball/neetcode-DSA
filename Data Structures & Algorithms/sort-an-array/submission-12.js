class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
      this.mergeSort(nums,0, nums.length-1 )
      return nums
    }


    mergeSort(nums , low, high){
        if(low>=high) return ;
        let mid = Math.floor((low+high)/2)
        this.mergeSort(nums, low, mid)
        this.mergeSort(nums, mid+1, high)
        this.merge(nums, low, mid, high)
    }


    merge(nums, l, m, h){
    let temp =[]
    let i =l
    let j = m+1

    while(i<=m && j<=h){
        if(nums[i]<=nums[j]){
        temp.push(nums[i])
        i++
        }else{
            temp.push(nums[j])
            j++
        }
    }


    while(i<=m){
        temp.push(nums[i++])
    }


    while(j<=h){
        temp.push(nums[j++])
    }



    for(let i=l; i<=h; i++){
        nums[i] =  temp[i-l]
    }
    }



}
