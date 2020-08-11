/*
Remove all elements from a linked list of integers that have value val
*/
var removeElements = function(head, val) {
    if(head == null){
        return null;
    }
    let currentNode = new ListNode(-1);
    currentNode.next = head;
    head = currentNode;
    
    while(currentNode.next != null){
        if(currentNode.next.val == val){
            currentNode.next = currentNode.next.next;
        }else{
            currentNode = currentNode.next;
        }
    }
    return head.next;

};
