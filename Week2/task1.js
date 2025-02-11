function TotalBill(prices) {
    if (!Array.isArray(prices)) {
        throw new Error("Input must be an array of numbers");
    }
    
    return prices.reduce((total, price) => {
        if (typeof price !== 'number' || price < 0) {
            throw new Error("All items in the array must be non-negative numbers");
        }
        return total + price;
    }, 0);
}

const items = [10.5, 20, 5.75, 12.99];
console.log("Total Bill:", TotalBill(items)); 
