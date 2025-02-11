function isPalindrome(number) {
    
    let numStr = number.toString();
    let reversedStr = numStr.split('').reverse().join(''); 

    
    if (numStr === reversedStr) {
        return true;
    } else {
        return false; 
    }
}


console.log(isPalindrome(121));  
console.log(isPalindrome(123));  
console.log(isPalindrome(444)); 
console.log(isPalindrome(987));  
