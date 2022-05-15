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
