
var bills = new Array(124, 48, 268);
var totalBills= [];
var tipsBills= [];
var tipCalculation = 0;



var calculateTip = function(billRestaurant) {
  if(billRestaurant < 50 ){
    tipCalculation = (billRestaurant/100)*20;
    tipsBills.push(tipCalculation);
    totalBills.push(tipCalculation + billRestaurant);
    
  }else if (billRestaurant > 50 && billRestaurant <200){
    tipCalculation = (billRestaurant/100)*15;
    tipsBills.push(tipCalculation);
    totalBills.push(tipCalculation + billRestaurant);
    
  }else if (billRestaurant > 200){
    tipCalculation = (billRestaurant/100)*10;
    tipsBills.push(tipCalculation);
    totalBills.push(tipCalculation + billRestaurant);
    
  }else{
    console.log("no tip");
    
  }
}

calculateTip(bills[0]);
calculateTip(bills[1]);
calculateTip(bills[2]);

console.log(
  "results 1 - tip: "+ tipsBills[0]+" Total account: "+ totalBills[0] +" \nresults 2 - tip: "+ tipsBills[1]+" Total account: "+ totalBills[1] +" \nresults 3 - tip: "+ tipsBills[2]+" Total account: "+ totalBills[2]
);






