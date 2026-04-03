class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
    let  l = Math.max(...weights)
    let r = weights.reduce((s,a)=>s+a,0)
    let res  = r

    while(l<=r){

        function canShip(cap){
            let remCap = cap
            let daysUsed = 1

            for(let w of weights){
                if(remCap<w){
                    daysUsed++
                    if(daysUsed>days){return false}
                    
                    remCap = cap
                }

              remCap -=w
            }
            return true
        }

        let capacity = Math.floor((l+r)/2)
        if(canShip(capacity)){
            res = Math.min(res, capacity)
            r = capacity-1
        }else{
            l= capacity+1
        }
    
    }

    return res
    }
}
