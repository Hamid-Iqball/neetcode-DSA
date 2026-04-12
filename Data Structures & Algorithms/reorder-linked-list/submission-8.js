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
     * @return {void}
     */
    reorderList(head) {

        let slow = head
        let fast = head.next
        while(fast!==null && fast.next !==null){
         slow = slow.next
         fast = fast.next.next
    
        }

        //reverse a linked list
        let middle = slow.next
        let prev = (slow.next=null)
        while(middle !==null){
            let temp = middle.next
            middle.next  = prev
            prev  = middle
            middle = temp
        }


        let first  = head
         middle = prev
        while(middle !==null){
            let temp1 = first.next
            let temp2 = middle.next
            first.next = middle
            middle.next = temp1
            first =temp1
            middle = temp2
            
        }
    }
}
