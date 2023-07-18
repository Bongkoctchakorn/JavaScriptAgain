let values1 = ['Apple', 1, false];
let values2 = ['Fries', 1, true, 'Mars'];
let values3 = ['Mars', 9 , 'Apple', 'Fries'];

for (let v1 of values1){
    
    for (let v2 of values2){
        if (v1 === v2 ) {
            console.log('values1 and values2 has',v1);
        }
        
       
    }
    for (let v3 of values3){
        if (v1 === v3 ) {
            console.log('values1 and values3 has',v3);
        }
        
       
    }
}

for (let v2 of values2){
   
    for (let v3 of values3){
        if (v2 === v3 ) {
            console.log('values2 and values3 has',v2);
        }
        
    }
   
}




