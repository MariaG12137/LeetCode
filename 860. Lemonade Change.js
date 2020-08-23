/*
At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.

*/
var lemonadeChange = function(bills) {
    let changeFive = 0;
    let changeTen = 0;
    let changeTwenty = 0;
    
    for (let money of bills){
       if(money == 5){
           changeFive += 1;
       }else if(money==10){
           if(changeFive>0){
               changeFive--;
               changeTen++;
           }else{
               return false;
           }
       }else if(money==20){
           if(changeTen>0 && changeFive>0){
               changeTen--;
               changeFive--;
               changeTwenty++;
           }else if(changeFive>=3){
               changeFive -= 3;
               changeTwenty++;
           }else{
               return false;
           }
       }  
    }
    return true;
}
