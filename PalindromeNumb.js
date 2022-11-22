function palindrome(num) {  
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

    palindrome(121);
    palindrome(123);
