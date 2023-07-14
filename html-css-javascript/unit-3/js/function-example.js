// function
// khai báo function
function sumInt (a, b) {
    let sum = a + b;
    return sum;
}

//gọi function để sử dụng:
console.log('Sum a, b = ' + sumInt(10, 5));

// arrow function (ES6)
// khai báo gần giống khai báo biến

/**
 * Cách 1:
 * const sumInt = (a, b) => { 
 * return a + b;
 * }

*/

/**
 * Cách 2:
 * const sumInt = (a, b) => a + b;
 * console.log('Sum a, b = ' + sumInt(15, 15));
*/

// hàm chứa hàm
//idea: create a function paymentBill and a function payMent
function payMent () { // function khai báo bt 
    let moneyForMeals = 1000000;
    let serviceFee = 10/100 * 1000000;
    return  moneyForMeals + serviceFee;
} 

const paymentBill = () => { //arrowFunction
    money = payMent() + 50000;
    return money;
}

console.log('money = ', paymentBill());
