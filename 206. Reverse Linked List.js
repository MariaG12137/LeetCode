/*
Reverse a singly linked list.
*/
var reverseList = function(head, previous = null) {
    if(!head) return previous;
    let next = head.next;
    head.next = previous;
    return reverseList(next,head)
};
var reverseList = function(head) {
    if(!head) return null;
    let next = null;
    let previous = null;
    
    while(head){
        next = head.next;
        head.next = previous;
        previous = head;
        head = next;
    }
    return previous;
};
