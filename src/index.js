module.exports = function reverse (n) {
    let arrayOfDigits = Array.from(String(n), Number);
    console.log(arrayOfDigits);
    if (n > 0) {
        let reversedInteger = arrayOfDigits.reverse().join('');
        console.log(reversedInteger);
        return reversedInteger;
    } else {
        arrayOfDigits.shift();
        let reversedInteger = arrayOfDigits.reverse().join('');
        console.log(reversedInteger);
        return reversedInteger;
    }
    
}
