/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
*/
var mergeTwoLists = function(l1, l2) {
    if(l1==null || l2==null){
        return l1 ||l2
    }

    let temp = null;
    let sorted = null;
    
    while(l1 && l2){
        if(l1.val < l2.val){
            if(!sorted){
                temp = l1;
                sorted = l1;
                console.log(1);
            }else{
                sorted.next = l1;
                sorted = sorted.next;
                console.log(2);
            }
            l1 = l1.next;

        }else{
            if(!sorted){
                temp = l2;
                sorted = l2;
                console.log(3);
            }else{
                sorted.next = l2;
                sorted = sorted.next;
                console.log(4);
            }
            l2 = l2.next;
        }
        console.log('sorted: ', sorted);
        console.log('temp: ', temp);
        console.log('l1: ', l1);
    
}
    
    sorted.next = l1||l2
    return temp;
}
===============================================================================================================================
var mergeTwoLists = function(l1, l2) {
    let Array = [];

    while(l1){
        Array.push(l1.val);
        l1 = l1.next;
    }
    while(l2){
        Array.push(l2.val);
        l2 = l2.next;
    }
    Array.sort((a,b)=>(a-b));
    
    let result = new ListNode('^');
    let current = result;
    for (let num of Array){
        current.next = new ListNode(num);
        current = current.next;
    }
    return result.next;
}
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode('^');
    let current = result;
    
    while(l1 && l2){
        if(l1.val<l2.val){
            current.next = l1;
            l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if(l1 || l2){
        current.next = l1 || l2;
    }
    return result.next
    
}

