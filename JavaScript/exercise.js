function sumEvenNumbers(numbers) {
    // Your code here
    let sum = 0;
    for (let i = 0;  numbers.length ; i++){
        if (numbers[i] % 2 === 0){
          sum += numbers[i];  
        }
    }
    return sum;
        
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected output: 30