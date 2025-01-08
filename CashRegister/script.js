let statusC = "CLOSED"
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
const values = [
    0.01,  // PENNY
    0.05,  // NICKEL
    0.1,   // DIME
    0.25,  // QUARTER
    1,     // ONE
    5,     // FIVE
    10,    // TEN
    20,    // TWENTY
    100    // ONE HUNDRED
  ];

const cash = document.getElementById("cash");
const change = document.getElementById("change-due");
const button = document.getElementById("purchase-btn");

const sufficientMoneyChecker = () => {
    let customerCash = parseFloat(cash.value);
    if (price > customerCash) {
        alert("Customer does not have enough money to purchase the item")
        return "INSUFFICIENT FUNDS";;
    } else if (price === customerCash) {
        change.innerText = "No change due - customer paid with exact cash"
        return "CLOSED";
    } else {
        return "OPEN";
    }
}

const changeCalculator = () => {
    const resultArray = [];
    let customerCash = parseFloat(cash.value);
    statusC = sufficientMoneyChecker();
    if (statusC === "OPEN") {
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
        return resultArray;
    } else {
        return;
    }
}

const changeCreator = (resultArray) => {
    let resultString = `Status: ${statusC} `
    for (let i = 0; i < 9; i++) {
        if (resultArray[i] <= cid[i][1] / values[i]){
            const denominationTotal  = resultArray[i] * values[i];
            resultString += `${cid[i][0]}: \$${denominationTotal.toFixed(2)} `;
        }
    }
    change.innerText = resultString;
}

button.addEventListener("click", () => {
    sufficientMoneyChecker();
})