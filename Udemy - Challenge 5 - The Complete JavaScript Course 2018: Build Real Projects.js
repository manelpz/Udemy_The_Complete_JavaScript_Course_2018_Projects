

var john = {
    fullName:"john smith",
    bills:[124, 48, 268, 42],

    calcTips: function(){
        this.tips =[];
        this.finalvalues = [];  
        
        for (var i=0; i< this.bills.length; i++){   
            //determine percentage baed on tip rules

            var percentage;
            var bill = this.bills[i]; 
            
            if(bill < 50)
            {
               percentage = .2;
            }else if(bill >= 50 && bills <200){
                percentage=.15
            }else{
                percentage = .1
            }
            //add reults to the corresponding arrays
            this.tips[i] = bill*percentage;
            this.finalvalues[i] = bill+bill*percentage;
        }
    }
}


var mark = {
    fullName:"mark smith",
    bills:[77, 475, 118, 45],

    calcTips: function(){
        this.tips =[];
        this.finalvalues = [];  
        
        for (var i=0; i< this.bills.length; i++){   
            //determine percentage baed on tip rules

            var percentage;
            var bill = this.bills[i]; 
            
            if(bill < 100)
            {
               percentage = .2;
            }else if(bill >= 100 && bills <300){
                percentage=.11
            }else{
                percentage = .25
            }
            //add reults to the corresponding arrays
            this.tips[i] = bill*percentage;
            this.finalvalues[i] = bill+bill*percentage;
        }
    }
}


function calcAverage(tips){
    var sum = 0;
    for(var i=0; i<tips.length; i++){
        sum = sum+tips[i];
    }
    return sum/ tips.length;
}

// do the calculations
mark.calcTips();
john.calcTips();
console.log(mark, john);

john.average =calcAverage(john.tips);
mark.average =calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average)
{
    console.log(john.fullName * '\'s family pays higer tips, with an average of'+ john.average);
}else{
    console.log(mark.fullName * '\'s family pays higer tips, with an average of'+ mark.average);    
}


//function constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = 
function(){
    console.log(2016-this.yearOfBirth);
};

var jane = new Person("jhon", 1999,"teacher");

jane.calculateAge();


//Object.create

var personProto = {
    calculateAge
}


//Passing functions as arguments

var years = [1990,1995, 2000, 2005];

function arraysCals(arr,fn){
    var arrRes = [];
    for(var i=0; i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}

var ages = arraysCals(years,calculateAge);
console.log(ages);


//functions returning functions

function interviewQuestion(job){
    if (job ==='designer'){
        return function(name){
            console.log(name +" ux");
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log(name+ " school");
        }
    }
}

var teacherQuestion = interviewQuestion('designer');
teacherQuestion('john');


//IIFE immediately invoked functions expression

(function (){
    var score = Math.random()* 10;
    console.log(score >= 5);
})();

(function(goodluck){
    var score = Math.random()*10;
    console.log(score >= 5 - goodluck);
})(5);


//closure
/*tiene acceso a A incluso despues de terminar ejecucion
de la funcion retirement() */

function retirement(retirementAge){
    var a = ' years of retirement';
    return function(yearOfBirth){
        var age = 2020 -yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS = retirement(66)
retirementUS(1990);
//=
retirement(66)(1990);


//fuction returning fuction with closures

function interviewQuestion(job){
    return function(name){
            if (job ==='designer'){
                console.log(name +" ux");
            }else if(job === 'teacher')
            {
                console.log(name+ " school");
            }
        }
    }
interviewQuestion('designer')('john');


//Bind, call

var john1 = {
    name:'john',
    age:26,
    job:'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log("good" + timeOfDay);
        }else if(style === 'informal'){
            console.log('hi');
        }
    }
}

john1.presentation('formal','morning');

var emily = {
    name:'emily',
    age: 23,
    job: 'designer'
};
john1.presentation.call(emily,'informal','night');

//otra forma es con apply, pero revise los valores en un array y no en variables

john1.presentation.apply(emily,['informal','night']);


var johnFriendly = john1.presentation.bind(john,'frendly');

johnFriendly('morning');


//example of bind


var years = [1990,1995, 2000, 2005];

function arraysCals(arr,fn){
    var arrRes = [];
    for(var i=0; i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}
function isFullAge(limit,el){
    return el >= limit 
}

var ages = arraysCals(years,calculateAge);
console.log(ages);

//bind 
var ages2 = arraysCals(ages,isFullAge.bind(this,28));
console.log(ages2);

//bind 
var ages2 = arraysCals(ages,isFullAge.bind(this,28));
console.log(ages2);



//example

function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion(){
    console.log(this.question);

    for(var i=0;i<this.answers.length; i++;){
        console.log(this.answers[i]);
    }
}















