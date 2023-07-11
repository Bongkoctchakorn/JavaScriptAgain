function numberSplit(num1){
    return [Math.floor(num1/2),Math.ceil(num1/2)];
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));