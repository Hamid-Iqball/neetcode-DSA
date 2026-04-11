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
        let index = head
        let cur = head

        while(cur!==null && cur.next!==null){
            cur = cur.next.next
            index = index.next

            if(cur===index){
                return true
            }


        }

        return false
    }
}
