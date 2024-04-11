function calculateBMI(weight, height){
    bmi = (weight - 110) / height;

    let interpretation = interpretBMI(bmi);

    console.log(`Your bmi is ${bmi}, and interpretation is ${interpretation}.`);
}

function interpretBMI(bmi){
    if(bmi < 18.5){
        return "Underweight";
    }else if(18.5 <= bmi < 25){
        return "Normal weight";
    }else if(25 <= bmi < 30){
        return "Overweight";
    }else if(30 <= bmi){
        return "Obese";
    }else{
        return "Check your weight and height";
    }
}

calculateBMI(90, 1.91);