function numbersSum(arry){
    let sum = 0;
    for (let i = 0; i < arry.length; i++){
        if (typeof arry[i] === 'number'){
            sum += arry[i];
        }
    }
    return sum;

}
console.log(numbersSum([1, 2, "13", "4", "645"])); // Output: 3(1 + 2 )
console.log(numbersSum([true, false, "123", "75"])); // Output: 0 (No numbers in the array)
console.log(numbersSum([1, 2, 3, 4, 5, true])); // Output: 15 (1 + 2 + 3 + 4 + 5)
  
