const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter  Number  "));
var result=1;
for(var i=0; i < num;i++){
result=result*(num-i);
}
console.log(result);