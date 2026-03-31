class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length
        let COL = matrix[0].length


        let l =0
        let  r = ROWS*COL-1

        while(l<=r){
            let m = l +Math.floor((r-l)/2)
            let row = Math.floor(m/COL)
            let col = m%COL

            if(target>matrix[row][col]){
                l =m+1
            }else if(target<matrix[row][col]){
                r = m-1
            }else{
                return true
            }
            
        }

        return false

    
}
}