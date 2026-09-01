function countSpecificLetterFrequency(letters, specificLetter) {
    // Your code here
    let count = 0;

    for (let i = 0 ; i < letters.length ; i++){
        if (letter [i] === specificLetter){
            count++
        }
    }
    return count;


}
console.log(countSpecificLetterFrequency(['a', 'b', 'a', 'c', 'b', 'a', 'd'], 'a')); // Expected output: 3
