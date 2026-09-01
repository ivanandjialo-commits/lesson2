// function calculateArea (length , width){
//     return length * width;
// }

// console.log("Area: " + calculateArea(5, 5));  // 25
// console.log("Area: " + calculateArea(5, 10)); // 50
// console.log("Area: " + calculateArea(10, 10)); // 100


function calculateTax(income, taxStatus){
    if (income <= 30000 && taxStatus === "single"){
        return income * 0.15;
    } else {
        if (income >= 30000 && taxStatus === "single"){
            return income * 0.20;
        }
    }
    if (income <= 50000 && taxStatus === "married"){
        return income * 0.10;
    } else {
        if (income >= 50000 && taxStatus === "married"){
        return income * 0.15;
    }  
    }
}

console.log("Tax for single person earning 25000: " + calculateTax(25000, "single")); // 3750
console.log("Tax for single person earning 50000: " + calculateTax(50000, "single")); // 10000
console.log("Tax for married person earning 40000: " + calculateTax(40000, "married")); // 4000
console.log("Tax for married person earning 60000: " + calculateTax(60000, "married")); // 9000