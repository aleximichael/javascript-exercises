const sumAll = function(num1, num2) {
    
    if (Number.isInteger(num1) && 
        Number.isInteger(num2) &&
        num1 > 0 &&
        num2 > 0) {
    } else {
        return "ERROR";
    }

    let sum = Math.min(num1, num2);

    for (let i = Math.min(num1, num2); i < Math.max(num1, num2); i++){
        sum += (i+1);
    };

    return sum;

}

// Do not edit below this line
module.exports = sumAll;
