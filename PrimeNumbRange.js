const prompt=require("prompt-sync")({sigint:true});
var num=parseInt(prompt("Enter  Number  "));
var count=0;
for(var j=2; j < num; j++){
    for(var i=2; i < j/2;i++){
    if(j%i==0){
        count++;
    }
}
if(count==0){
    console.log(j+"  is Prime Number");
}else{
    count=0;
}
}