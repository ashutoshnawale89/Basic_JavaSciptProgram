const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter Number"));
var result=1/1;
for(var i=1; i < num; i++){
result=""+1+"/"+i+" +"+result;

}
console.log(result);
