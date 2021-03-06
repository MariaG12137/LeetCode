/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the
multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/
var fizzBuzz = function(n) {
    let array = [];
    
    for(let i = 1; i<=n; i++){
        let s = "";      
        if(i%3 == 0 && i%5 ==0){
            s = "FizzBuzz"
        }else if(i%3 == 0){
            s = "Fizz"
        }else if(i%5 == 0){
            s = "Buzz"
        }else{
            s = i.toString();
        }

        array.push(s)
    }
    return array;
};
=============================================================================================================
var fizzBuzz = function(n) {
    let result = [];
    for(let num=1; num<=n; num++){
        if(Number.isInteger(num/15)){
            result.push('FizzBuzz');
        }else if(Number.isInteger(num/3)){
            result.push('Fizz');
        }else if(Number.isInteger(num/5)){
            result.push('Buzz');
        }else{
            result.push(num.toString())
        }
    }
    return result
};
