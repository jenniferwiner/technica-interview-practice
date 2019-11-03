/* 
*
* For solutions in other languages:
https://leetcode.com/problems/swap-nodes-in-pairs/discuss/?currentPage=1&orderBy=hot&query=
*
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy.next;
    let third = dummy.next.next;
    while (third != null) {
        first.next = third;
        second.next = third.next;
        third.next = second;
        first = second;
        second = second.next;
        if (second == null) break;
        third = second.next;
        
    }
    return dummy.next;  
};