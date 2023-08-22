function sumTwoSmalletNum(num){
    let show = 0 ;
    num.sort(function(a,b){return a-b});
    for(let i = 0 ; i < num.length ; i++){
        if(num[i] > 0){
            show += num[i] + num[i+1];
            break;
        }
    }
    return show;
}
console.log(sumTwoSmalletNum([19,5,42,2,77]));
console.log(sumTwoSmalletNum([10,343445353,3453445,34535453453]));
console.log(sumTwoSmalletNum([2,9,6,-1]));
console.log(sumTwoSmalletNum([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmalletNum([3683,2902,3951,-475,1617,-2385]));