class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        this.merge_Sort(nums, 0, nums.length-1)
      
    }


    merge_Sort(arr, left, right){
        if(left>=right) return
        let mid = Math.floor((left+right)/2)
        this.merge_Sort(arr, left, mid)
        this.merge_Sort(arr, mid+1, right)
        this.merge(arr, left, mid, right)

    }


    merge(arr, l, m, r){
        let temp =[]
        let i =l
        let j = m+1
        while(i<=m && j<=r){
            if(arr[i]<=arr[j]){
                temp.push(arr[i++])
            }else{
                temp.push(arr[j++])
            }
        }


        while(i<=m){
            temp.push(arr[i++])
        }

        while(j<=r){
            temp.push(arr[j++])
        }


        for(let i=l; i<=r; i++){
            arr[i] =  temp[i-l]
        }
    }




}
