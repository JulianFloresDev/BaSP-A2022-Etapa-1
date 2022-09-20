/*******************
 **    If Else
 ********************/
//? a)
var randomNum = Math.random();
if (randomNum >= 0.5) {
    console.log("Greater than 0,5");
} else {
    console.log("Lower than 0,5");
}

//? b)
var Age = Math.round(Math.random() * 100);
console.log('Exercise 4 b) The random "Age" is: ', Age);
if (Age < 2) {
    console.log("Baby");
} else if (Age < 12) {
    console.log("Child");
} else if (Age < 19) {
    console.log("Teenager");
} else if (Age < 30) {
    console.log("Young");
} else if (Age < 60) {
    console.log("Adult");
} else if (Age < 75) {
    console.log("Older Adult");
} else {
    console.log("Elderly");
}