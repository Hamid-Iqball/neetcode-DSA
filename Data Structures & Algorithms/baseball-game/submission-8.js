class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let records = []
        for(let i=0 ; i<operations.length; i++){
            if(operations[i]==='+'){
                let top  = Number(records.pop())
                let newTop = Number(top + records[records.length-1])                
                records.push(top)
                records.push(newTop)
            }else if(operations[i]==="D"){
            
            
                records.push(2 * records[records.length-1])
            }else if(operations[i]==="C"){
                records.pop()
            }else{
                records.push(Number(operations[i]))
            }
        }

       let sum= records.reduce((s,a)=>{
      return s+a
        
       }, 0)

        return sum
    }
}
