function handleIncrement() {
    var counterElement = document.getElementById("count");
    var currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue+1;
}

function handleDecrement(){
    var counterElement = document.getElementById("count");
    var currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue-1;

}

function handleReset(){
    var counterElement = document.getElementById("count");
    var currentValue = 0;
    counterElement.innerText = currentValue;

}
