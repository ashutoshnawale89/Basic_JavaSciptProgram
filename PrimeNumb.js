const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter  Number  "));
var count=0;
for(var i=2; i < num/2;i++){
    if(num%i==0){
        count++;
    }
}
if(count==0){
    console.log("Prime Number");
}
else {
    console.log("Not Prime Number") 
}