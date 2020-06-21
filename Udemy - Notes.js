

//objects js

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
    if(typeof john[i] == 'string') continue;
    console.log(john[i]);
}