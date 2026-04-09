/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let temp  = head
        let prev = head

        while(temp !==null && temp.next !== null){
            temp  =temp.next.next
            prev  = prev.next

            if(temp===prev){
                return true
            }
        }

        return false
    }
}
