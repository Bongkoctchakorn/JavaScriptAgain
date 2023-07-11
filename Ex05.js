function leapYear(num1){
    if (num1%4 == 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(leapYear(1990));
console.log(leapYear(1924));
console.log(leapYear(2021));

