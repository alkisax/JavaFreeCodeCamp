const callStack = [
    'a(): returns "freeCodeCamp " + b()',
    'b(): returns "is " + c()',
    "c(): returns 'awesome!'"

];

const a = () => {
    return "freeCodeCamp " + b();
};

const b = () => {
    return "is " + c()
};

const c = () => {
    return "awesome!";
};

console.log(a());

//
const countDownAndUp = (number) => {
    console.log(number);

    if (number === 0) {
        console.log("Reached base case");
        return;
    } else {
        countDownAndUp(number - 1);
        console.log(number);
    }
};

countDownAndUp(3);

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinaryOLDEST = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0) {
        result.innerText = "0";
        return;
    }

    while (input > 0){
        let quotient = Math.floor(input / 2);
        let remainder = input % 2;
        input = quotient;

        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
    }
    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);

    result.innerText = remainders.reverse().join("");
   
};

const decimalToBinaryOLD = (input) => {
    let binary = "";

    if(input === 0) {
        binary = "0";
    }

    while (input > 0) {
        // input = 0;
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    }

    result.innerText = binary;
};
//66
const decimalToBinary = (input) => {

    // if (input === 0) {
    //     return "0";
    // } else if(input === 1) {
    //     return "1";
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

const showAnimation = () => {
    console.log("free");
    console.log("Code");
    console.log("Camp");
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    };
    if (inputInt === 5) {
        showAnimation();
        return;
    };
    console.log(numberInput.value)
    result.textContent = decimalToBinary(inputInt);    
    numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    };
});

