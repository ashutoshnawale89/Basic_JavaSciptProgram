const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter The Number in Single Digit"));
if(num==1){
    console.log("ONE");
}
if(num==2){
    console.log("TWO");
}
if(num==3){
    console.log("THREE");
}
if(num==4){
    console.log("FOUR");
}
if(num==5){
    console.log("FIVE");
}
if(num==6){
    console.log("SIX");
}
if(num==7){
    console.log("SEVEN");
}
if(num==8){
    console.log("EIGHT");
}
if(num==9){
    console.log("NINE");
}
if(num==0){
    console.log("ZERO");
}
if(num > 9 || num < 0){
    console.log("Invalid Input");
}