function printMultiplicationTable(number) {
    let i = 1;
    while (i <= 10) {  
        console.log(number + " x " + i + " = " + (number * i));  
        i++;  
    }
}

printMultiplicationTable(5);
