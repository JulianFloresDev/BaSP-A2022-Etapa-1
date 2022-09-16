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
console.log(Age);
switch (true){
    case Age < 2:
        console.log("Baby");
        break;
    case Age < 12:
        console.log("Child");
        break;
    case Age < 19:
        console.log("Teenager");
        break;
    case Age < 30:
        console.log("Young");
        break;
    case Age < 60:
        console.log("Adult");
        break;
    case Age < 75:
        console.log("Older Adult");
        break;
    default:
        console.log("Elderly");
        break;
}