


john = {
  lastNameJohn:"smith",
  massJohn: 92,
  heightJohn: 1.95,
  calcBMIJohn: function(){
    this.BMIJohn = this.massJohn/(this.heightJohn*this.heightJohn)
  }
}

mark = {
  lastNameMark:"jobs",
  massMark: 78,
  heightMark: 1.69,
  calcBMIMark: function(){
    this.BMIMark = this.massMark/(this.heightMark*this.heightMark)
  }
}

var HigherBMI = "";
    
john.calcBMIJohn();
mark.calcBMIMark()
//console.log("hola "+john.BMIJohn);
    if ( john.BMIJohn > john.BMIMark){
      HigherBMI ="john";
    }else if (john.BMIJohn < mark.BMIMark){
      HigherBMI ="Mark";
    }else{
      HigherBMI ="same";
    }

console.log('The  higher BMI belongs to: ' + HigherBMI);

