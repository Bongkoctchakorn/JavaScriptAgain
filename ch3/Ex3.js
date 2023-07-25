function indexMultiplier(...arry) {
  if (arry.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    sum += arry[i] * i;
  }

  return sum;
}

// Test cases
console.log(indexMultiplier(1, 2, 3, 4, 5)); 
// Output: 40 (0*1 + 1*2 + 2*3 + 3*4 + 4*5)
console.log(indexMultiplier(-3, 0, 8, -6)); 
// Output: -2 (0*(-3) + 1*0 + 2*8 + 3*(-6))