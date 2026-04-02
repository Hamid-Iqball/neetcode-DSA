class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let  l =Math.max(...weights)
        let r = weights.reduce((sum,a)=>sum+a, 0)
        let res = r

    function canShip(cap){
        let daysUsed =1
        let remainingCap = cap

        for(let w of weights){
            if(remainingCap<w){
                daysUsed++
                if(daysUsed>days){
                    return false
                }

                remainingCap = cap
            }


            remainingCap -=w
        }
        return true

    }

        while(l<=r){
            let capacity = Math.floor((l+r)/2)

            if(canShip(capacity)){
                res =Math.min(res , capacity)
                r = capacity-1
            }else{
                l = capacity+1
            }
        }

        return res
    }
}
