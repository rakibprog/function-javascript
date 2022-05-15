function shopping(budget){
        var shirtPrice = 100;
        var totalShirt = budget / 100;
        return totalShirt;  
}

var budgetTaka = 2000;
var totalShoppingCost = shopping(budgetTaka); 
console.log(totalShoppingCost);

//  Multiple parameter add, multiplication

function  math(num1,num2){
        var total = num1 + num2;
        return total;
}

var value1= 10;
var value2 = 20;
var result = math(value1,value2);
console.log(result);


// array value add

var numbers = [10,30,40,40,60,80,90,100,120,130]

for(i = 0; i < numbers.length; i++ ){
        number = numbers[i];
        console.log(number);
        if(number > 90){
            break;
        }
       
}