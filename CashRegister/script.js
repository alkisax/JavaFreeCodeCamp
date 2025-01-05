let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cash = document.getElementById("cash");
const change = document.getElementById("change-due");
const button = document.getElementById("purchase-btn");

const sufficientMoneyChecker = () => {
    let customerCash = parseFloat(cash.value);
    if (price > customerCash) {
        alert("Customer does not have enough money to purchase the item")
        return false;
    } else if (price === customerCash) {
        change.innerText = "No change due - customer paid with exact cash"
        return true;
    } else {
        return true;
    }
}

const changeCalculator = () => {
    const resultArray = [];
    let customerCash = parseFloat(cash.value);
    if (sufficientMoneyChecker()) {
        let moneyChange = customerCash - price;
        resultArray[8] = Math.floor(moneyChange / 100);
        moneyChange %= 100;
        resultArray[7] = Math.floor(moneyChange / 20);
        moneyChange %= 20;
        resultArray[6] = Math.floor(moneyChange / 10);
        moneyChange %= 10;
        resultArray[5] = Math.floor(moneyChange / 5);
        moneyChange %= 5;
        resultArray[4] = Math.floor(moneyChange / 1);
        moneyChange %= 1;
        resultArray[3] = Math.floor(moneyChange / 0.25);
        moneyChange %= 0.25;
        resultArray[2] = Math.floor(moneyChange / 0.1);
        moneyChange %= 0.1;
        resultArray[1] = Math.floor(moneyChange / 0.05);
        moneyChange %= 0.05;
        resultArray[0] = Math.floor(moneyChange / 0.01);
    } else {
        return;
    }
}

button.addEventListener("click", () => {
    sufficientMoneyChecker();
})