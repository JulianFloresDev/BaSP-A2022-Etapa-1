/*******************
 **         For
 ********************/
//? a)
var exercise5A = [
    'acérééé',
    'jééé',
    'ajhâââä!!',
    'ejêëêëh!',
    'acereeleritubiridaneeeeneeribirotubere',
];
for (var i = 0; i < exercise5A.length; i++){
    alert('Exercise five.\n\nItem a)\n' + 'The word in the position ' + (i + 1) + ' is:\n' + exercise5A[i]);
};

//? b)
for(var i = 0; i < exercise5A.length; i++){
    var exercise5B = exercise5A[i].substring(0,1).toUpperCase() + exercise5A[i].substring(1);
    alert('Exercise five.\n\nItem b)\n' + 'The word in the position ' + (i + 1) + ' is:\n' + exercise5B);
};

//? c)
var sentence = '';
for(var i = 0; i < exercise5A.length; i++){
    sentence += exercise5A[i] + ' ';
};
alert('Exercise five.\n\nItem c)\n' + 'The string in the "sentence" string is:\n\n' + sentence);

//? d)
var empy = [];
for(var i = 0; i < 10; i++){
    empy.push(i);
};
console.log('Exercise 5.\n\nEmpy array filled with for loop: ', empy);