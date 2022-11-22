var num=1;
var rupes=100;
var i=0;
var count=0;
var winningTime=0;

while(i < num && rupes!=200  && rupes!=0){
    var bet=Math.floor(Math.random()*10);
    if(bet >=5){
        rupes++;
        winningTime++;
    }
    else{
        rupes--;
    }
    count++;
}
console.log(winningTime+" is Winning Time");
console.log(count+" time is Playing Game ")
if (rupes <= 0){
    console.log("All The Money Loose  "+ rupes);
}
else {
    console.log("All The Money Double "+rupes);
}