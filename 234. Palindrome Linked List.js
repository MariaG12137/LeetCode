/*
Given a singly linked list, determine if it is a palindrome.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head)return null;
    let count = 0;
    function findMiddle(fast, slow) {
        if(!fast || !fast.next) return slow;
        return findMiddle(fast.next.next, slow.next);
    }
    function reverse(node, prev) {
        if(!node) return prev;
        const next = node.next;
        node.next = prev;
        return reverse(next, node);
    }
    
    let mid = findMiddle(head,head);
    let reversed = reverse(mid,null);
    console.log(reversed,head)
    
    function traverse(n1, n2) {
        if(!n1 || !n2) return true;
        if(n1.val !== n2.val) return false;
        return traverse(n1.next, n2.next);
    }
    return traverse(head,reversed)
};
