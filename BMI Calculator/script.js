
function handleBMI(){
    var heightInputElement = document.getElementById("height");
    var weightInputElement = document.getElementById("weight");
    var bmiResultElement = document.getElementById("bmiValue");

    var currentHeightValue = parseFloat(heightInputElement.value)/100;
    var currentWeightValue = parseFloat(weightInputElement.value);

    var bmi = currentWeightValue / (currentHeightValue * currentHeightValue);

    bmiResultElement.innerText = bmi.toFixed(2); // Display BMI with 2 decimal places
}
