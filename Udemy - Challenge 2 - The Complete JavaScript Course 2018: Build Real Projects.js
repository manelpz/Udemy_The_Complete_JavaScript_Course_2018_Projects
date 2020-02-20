var a=122;
var b=22;
var c=3;
/*
if (a>b)
{
  console.log("A es mayor")
}else{
  console.log("B es mayor")
}
*/

if (a>b && a>c){
  console.log("el mayor es A");
}else if (b>a && b>c){
  console.log("el mayor es B");
}else if (c>a && c>b){
  console.log("el mayor es C");
}else {
  console.log("there is a draw");
}

