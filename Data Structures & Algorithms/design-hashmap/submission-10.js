class MyHashMap {
    constructor() {
        this.size =1000
        this.map = new Array(this.size).fill(null).map(()=>[])
    }

    hash(key){
        return key%this.size
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let index = this.hash(key)
        let bucket = this.map[index]

        for(let i=0; i<bucket.length; i++){
            if(bucket[i][0]===key){
                bucket[i][1]=value
                return
            }
        }

        bucket.push([key,value])
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let index = this.hash(key)
        let bucket = this.map[index]

            for(let i=0; i<bucket.length; i++){
                if(bucket[i][0]===key){
                    return bucket[i][1]
                }
            }

            return -1

    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hash(key)
        let bucket = this.map[index]

        for(let i=0; i<bucket.length; i++){
            if(bucket[i][0]===key){
                bucket.splice(i,1)
                return
            }
        }

    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
