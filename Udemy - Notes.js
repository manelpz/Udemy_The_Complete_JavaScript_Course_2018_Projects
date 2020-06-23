

//objects js
/*
var john = {
    firstName: 'John',
    lastName:'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    isMarried: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear; 
    }
}

john.calcAge();
console.log(john);


var john = ['john','smith', 1990];
for (var i = 0; i < john.length; i++){
    if(typeof john[i] == 'string') continue; //break;
    console.log(john[i]);
}
*/

//hoisting

//call fistly a function is possible for hoisting
calculateAge(1990);

function calculateAge(year){
    console.log(2016 - year);
}

 //function expression
 //function expression isnt possible to call with hoisting
 //retirement(1990);
 // all depent of execution context
 
 var retirement  = function(year){
     console.log(65 - (2020 - year));
 }





 console.log(age);
 var age =30;

