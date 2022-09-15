/*******************
**    Arrays
********************/
//? a)
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Month number 5:' ,months[4], '\n\Month number 11:', months[10]);

//? b)
console.log('Months in alphabetical order, with \'sort\':',months.sort());

//? c)
months.unshift('Not a Month');
console.log('Months with an element added at the beginning: ',months);

months.push('Not a Month');
console.log('Months with an element added at the end: ', months);

//? d)
months.shift();
console.log('Months with an element deleted at the beginning :', months);

months.pop();
console.log('Months with an element deleted at the end :', months);

//? e)
var monthsReverse = [...months];
monthsReverse.reverse();
console.log('Months in reverse order: ', monthsReverse);

//? f)
var monthsJoin = months.join('-');
console.log(monthsJoin);

//? g)
var monthsMayNov =  months.slice(months.indexOf('Mayo'), (months.indexOf('Noviembre') + 1));
console.log(monthsMayNov);