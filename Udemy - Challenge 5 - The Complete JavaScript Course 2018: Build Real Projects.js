

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