function countPosSumNeg(numbers) {
    let positiveCount = 0;
    let negativeSum = 0;

    for (let number of numbers){
        if (number > 0){
            positiveCount++;
        }
        else if(number < 0){
            negativeSum += number;
        }
    }
    return [positiveCount,negativeSum];
}
console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]));
console.log(countPosSumNeg([92, -4, 80, -73, -28]));
console.log(countPosSumNeg([]));
  
