function isPerfectSquare(number) {
    
    let sqrt = Math.sqrt(number);
    

    if (sqrt === Math.floor(sqrt)) {
        return true;  
    } else {
        return false; 
    }
}


console.log(isPerfectSquare(16)); 
console.log(isPerfectSquare(20)); 
console.log(isPerfectSquare(25)); 
console.log(isPerfectSquare(30));
