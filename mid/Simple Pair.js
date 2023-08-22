function number(num,result){
    let show = 0 ;
    let show2 = 0 ;
    let num3 =[];
    for(let i = 0; i< num.lenght - 1 ; i ++){
        for(let v = 1 ; v<= num.lenght -1 ; v++){
            show = num[i] * num[v];
            if(show === result){
                num3.unshift(num[i],num[v]);
                break;
            }
        }
    }
    if(num3.length == 0){
        return null;
    }
    else{
        return num3;
    }
}
console.log(number([1,2,3],3));
console.log(number([1,2,3],6));
console.log(number([1,2,3],9));