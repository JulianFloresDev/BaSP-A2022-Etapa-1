/*******************
 **     Functions
 ********************/
//? a)
function suma(num1, num2) {
    return num1 + num2
};
var numeroSumado = suma(Math.random() * 10, Math.random() * 25);
console.log('Exercise 6\nItem a)\n\n', numeroSumado);

//? b)
function numValid(num1, num2) {
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
        alert('Exercise six.\nItem b)\n\nSome param is not a number. Check It Bro!!');
        return NaN
    }
    return suma(num1, num2);
}

//? c)
function validateInteger(num) {
    return Number.isInteger(num);
}

//? d)
function validNumberInteger(num1, num2) {
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
        alert('Exercise six.\nItem b)\n\nSome param is not a number. Check It Bro!!');
        return NaN
    } else {
        if (!validateInteger(num1)) {
            alert('Exercise six.\nItem d)\n\nThe first number is nor integer\n\n' + num1);
            // return Math.round(sumValid(num1,num2));
            num1 = Math.round(num1);
        } else if (!validateInteger(num2)) {
            alert('Exercise six.\nItem d)\n\nThe second number is not integer\n\n' + num2);
            // return Math.round(sumValid(num1,num2));
            num2 = Math.round(num2);
        }
    }
}

//? e)
function validateSum(num1, num2) {
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
        alert('Exercise six.\nItem b)\n\nSome param is not a number. Check It Bro!!');
        return NaN
    } else if (!validateInteger(num1) || !validateInteger(num2)) {
        alert('Exercise six.\nItem d)\n\nOne of both numbers is not integer\n\n' + num1 + '\n\n' + num2);
        num1 = Math.round(num1);
        num2 = Math.round(num2);
    }
    return suma(num1, num2);
}


console.log('Exercise 6, e) Valid none of both is a number', validateSum('Not a Number', 'Number'));
console.log('Exercise 6, e) Valid two float numbers', validateSum(7.146, 8.5132));
console.log('Exercise 6, e) Valid two integer numbers', validateSum(10, 10));
console.log('Exercise 6, e) Valid a number and a string', validateSum(10, 'Not a Number'));