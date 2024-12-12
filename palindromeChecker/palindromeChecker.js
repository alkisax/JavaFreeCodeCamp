const checkButton = document.getElementById("check-btn");
let input = document.getElementById("text-input");
const result = document.getElementById("result");


checkButton.addEventListener("click", () =>{
    let inputTxt = input.value;
    if (inputTxt === "") {
        alert("Please input a value");
        return;
    }
    let isPalindrome = palindromeChecker(inputTxt);
    displayer(isPalindrome, inputTxt);
});

const palindromeChecker = (inputTxt) => {
    const cleanInput = inputTxt.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let isPalindrome = true;
    for (let i = 0; i < cleanInput.length / 2; i++){
        if (cleanInput[i] !== cleanInput[cleanInput.length - i - 1]) {
            isPalindrome = false;
        } 
    }
    return isPalindrome;
};

const displayer = (isPalindrome, inputTxt) => {
    if (isPalindrome) {result.innerText = `${inputTxt} is a palindrome`} 
    else {result.innerText = `${inputTxt} is not a palindrome`}
};



