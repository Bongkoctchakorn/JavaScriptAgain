function HighestDigit(num){
    let highestdigit = 0 ;
    
    while (num > 0) {
        const digit = num % 10;
        highestdigit = Math.max(highestdigit, digit);
        num = Math.floor(num / 10);
    }
    return highestdigit;
}
console.log(HighestDigit('379'));
console.log(HighestDigit('2'));
console.log(HighestDigit('377401'));