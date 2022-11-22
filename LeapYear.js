const prompt=require("prompt-sync")({sigint:true});
var year=parseInt(prompt("Enter"));
if(year%4==0 && year%100!=0){
console.log(year+" It is Leap Year");
}
else{
    console.log(year+" It is Not Leap Year");
}