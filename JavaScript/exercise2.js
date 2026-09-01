function concatenateStrings(strings) {
    // Your code here
    let resuilt = "";

    for(let i = 0; i<  strings.length; i++){
        resuilt = resuilt + strings[i]
    }
    return resuilt;

}
console.log(concatenateStrings(["Hello", "World", "in", "JavaScript"])); // Expected output: "HelloWorldinJavaScript"