class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let k = 1

        while(true){
            let totalTime =0

            for(let pile of piles){
                totalTime += Math.ceil(pile/k)
            }

            if(totalTime<=h){
                return k
            }

            k++

        }

    }
}
