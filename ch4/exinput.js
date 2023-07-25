const rl = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

var name, weight, height, bmi;

rl.question('Enter your name:', (answer) =>{
    name = answer;
    rl.question('Enter your weight (in kg):', (answer) =>{
        weight = answer;
        rl.question('Enter your height (in m):', (answer) => {
            height = answer;
            bmi = weight / (height * height);
            console.log(`${name},your BMI is ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
})