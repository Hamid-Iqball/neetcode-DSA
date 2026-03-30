class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxSum = 0
        for (let  i=0; i<prices.length; i++){
           for(let j=i+1; j<prices.length; j++){
           let sum = prices[j] - prices[i]
            maxSum = Math.max(maxSum , sum)
        }


    }
    return maxSum
}
}
