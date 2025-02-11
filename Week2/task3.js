function LargestNumber(arr) {
    if (arr.length === 0) return null; 
    return Math.max(...arr);
}

console.log(LargestNumber([10, 5, 8, 22, 15])); 
