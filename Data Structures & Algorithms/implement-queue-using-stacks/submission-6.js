class MyQueue {
    constructor() {
        this.queue =[]
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
       return this.queue.shift()
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.queue.length>0){
            return this.queue[0]
        }
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length===0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
