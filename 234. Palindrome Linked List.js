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
==========================================================================================================================
//second submission
var isPalindrome = function(head) {
    let stack = [];
    let p1 = head;
    let p2 = head;
    
    while(p2 && p2.next){
        stack.push(p1.val);
        p1 = p1.next;
        p2 = p2.next.next;
    }
    if(p2){
        p1 = p1.next;
    }
    
    while(p1){
        if(stack.pop() !== p1.val){
            return false
        }else{
            p1 = p1.next;
        }
    }
    return true
};
========================================================================================================================
var isPalindrome = function(head) {
    let p1 = head;
    let p2 = head;
    //fast and slow pointers, find mid
    while(p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    //inverse mid
    function reverse(node,prev){
        if(node == null){
            return prev;
        }
        const next = node.next;
        node.next = prev;
        return reverse(next, node)
    }
    let reversed = reverse(p1,null);
    
    //compare inversed mid with head
    while(reversed){
        if(head.val !== reversed.val){
            return false;
        }else{
            head = head.next;
            reversed = reversed.next;
        }
    }
    return true
};

