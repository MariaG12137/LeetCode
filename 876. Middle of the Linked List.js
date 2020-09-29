/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.
*/
var middleNode = function(head) {
    if(!head)return [];
    let p1 = head;
    let p2 = head;
    
    while(p2.next !== null && p2.next.next !== null){
        p1=p1.next;
        p2=p2.next.next;
    }
    if(p2.next == null){
        return p1;
    }else{
        return p1.next
    }
};
=================================================================
//second submission
var middleNode = function(head) {
    let p1 = head;
    let p2 = head;
    while(p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1;
};
