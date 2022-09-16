/*********************
**        Strings
**********************/
//? a)
var longString = 'TraCkgEnIx';
var longStringUpCase = longString.toUpperCase();
console.log('Now the string is look like that:', longStringUpCase);

//? b)
var exercise2B = 'Homosapiens';
var exercise2BResponse = exercise2B.substring(0,5);
console.log('Every "Rosario Central" fans are, ', exercise2BResponse);

//? c)
var exercise2CResponse = exercise2B.substring(exercise2B.length - 3, exercise2B.length);
console.log('Here is the string reduced to 3 characters: ',exercise2CResponse);

//? d)
var exercise2D = 'ChuPaMaFaBla';
var exercise2DResponse = exercise2D.substring(0,1).toUpperCase() + exercise2D.substring(1, exercise2D.length).toLowerCase();
console.log(exercise2DResponse);

//? e)
var exercise2E = 'Superman is not Clark Kent, obviusly, he dosen\'t need glasses.';
var exercise2EResponse = exercise2E.indexOf(' ');
console.log(exercise2EResponse);

//? f)
var e2F = 'aBaRaKadabraAaAaA dumBLeDOoOoOoOr';
var exercise2FResponse = e2F.substring(0,1).toUpperCase() + e2F.substring(1, e2F.indexOf(' ')).toLowerCase()
    + e2F.substring(e2F.indexOf(' ') + 1, (e2F.indexOf(' ') + 2)).toUpperCase() + e2F.substring(e2F.indexOf(' ') + 2).toLowerCase();
console.log(exercise2FResponse);