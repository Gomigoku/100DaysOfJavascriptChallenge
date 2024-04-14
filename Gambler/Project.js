const prompt = require("prompt-sync")();


const ROWS =3;
const COLS = 3;

const SYMBOLS_COUNT ={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const SYMBOLS_VALUES ={
    "A":5,
    "B":4,
    "C":3,
    "D":2
}



const deposit = () => {
    while(true){
        const depositeAmount = prompt("Enter a deposite amount:");
        // console.log(typeof(depositeAmount));
        const numberDepositeAmount = parseFloat(depositeAmount);
        // console.log(typeof(numberDepositeAmount));
    
        if(isNaN(numberDepositeAmount) || numberDepositeAmount <=0 ){
            console.log("Invalid deposite amount, try again");
        }
        else{
            return numberDepositeAmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on(1-3):");
        // console.log(typeof(depositeAmount));
        const numberofLines = parseFloat(lines);
        // console.log(typeof(numberDepositeAmount));
    
        if(isNaN(numberofLines) || numberofLines <=0 || numberofLines >3 ){
            console.log("Invalid number of lines, try again");
        }
        else{
            return numberofLines;
        }
    }
};


const getBet = (balance,lines) => {
    while(true){
        const bet = prompt("Enter the number bet per line:");
        // console.log(typeof(depositeAmount));
        const numberBet = parseFloat(bet);
        // console.log(typeof(numberDepositeAmount));
    
        if(isNaN(numberBet) || numberBet <=0 || numberBet > balance/lines ){
            console.log("Invalid bet, try again!");
        }
        else{
            return numberBet;
        }
    }

}

const spin = () => {
    const symbols  = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        console.log(symbol, count);
    }

}

spin();
let balance = deposit();
const numberofLines = getNumberOfLines();
const bet = getBet(balance,numberofLines);
console.log(balance);
console.log(numberofLines);
console.log(bet);


