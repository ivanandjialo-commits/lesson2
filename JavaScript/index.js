// let fullName = "John Doe";
// let age = 25;
// let isStudent = true;

// let greeting = "Hello my name is " + fullName + ", I am " + age + " years old and it is" + isStudent + "that I am a student";

// console.log(greeting)

// Array

// let foods = ["cendol", "sushi", "nasi lemak", "roti canai", "ice cream"];

// const firstThree = foods.slice(0, 3); 

// console.log(firstThree);

function checkTemperature (temperature){
    if ( temperature > 30){
        return "Hot";
    } else {
        return "Cold";
    }
}
console.log(checkTemperature(35)); // Hot
console.log(checkTemperature(25)); // Cold