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
function sumValid(num1, num2) {
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
        alert('Exercise six.\nItem b)\n\nSome param is not a number. Check It Bro!!');
        return NaN
    } return suma(num1,num2);
}

//? c)
function validateInteger(num) {
    return Number.isInteger(num);
}

//? d)
function sumValid2(num1, num2) {
    if (!validateInteger(num1)) {
        alert('Exercise six.\nItem d)\n\nThe first number is nor integer\n\n' + num1);
        return Math.round(sumValid(num1,num2));
    } else if (!validateInteger(num2)) {
        alert('Exercise six.\nItem d)\n\nThe second number is not integer\n\n' + num2);
        return Math.round(sumValid(num1,num2));
    } else return sumValid(num1,num2);
}

//? e)
function sumComplete(num1,num2){
    return sumValid2(num1,num2);
}