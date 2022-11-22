
var num=1;
var i=0;
var head=0;
var tail=0;
while(i < num && head!=11 && tail!=11){
    var coin=Math.floor(Math.random()*10);
    if (coin >= 5){
        head++;
    }
    else {
        tail++;
    }
}
console.log("HEAD : "+head+"  &  TAIL  : "+tail );