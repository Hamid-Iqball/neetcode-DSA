class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let records = []
       let str ={
        ")" : "(",
        "}" : "{",
        "]" : "["
       }
       for (let c of s){
        if(str[c]){
            if(records.length>0 && records[records.length-1]===str[c]

            ){
                records.pop()
            } else{
                return false
            }
        }else{
            records.push(c)
        }
       }
       return records.length===0
    }
}
