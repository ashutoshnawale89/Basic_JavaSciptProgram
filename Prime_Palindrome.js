
// 1st Function To Check The Number Is Prime or NOT
function primrNumber(num){
    var count=0;
for(var i=2; i <= num/2; i++){
    if(num%i==0){
        count++;
    }
}
if(count==0){
    console.log("It is Prime Number");
    palindromeNumber(num);

}
else {
    console.log("It is Non-Prime Number");
}
}
//  Second Function To Check The Palindrome or Not
function palindromeNumber(num) {  
    var remainder, reverse, num, temp = 0;    
    reverse = num;  
    while (num > 0)  
    {  
        remainder = num % 10;  
    temp = temp*10 +remainder;
    num = parseInt( num / 10);    
    }  
    if (temp == reverse)  
    {  
        console.log( "It is a Palindrome Number");  
    }  
    else  
    {  
    console.log("it is not a Palindrome Number");  
    }  
    }  

    primrNumber(113);