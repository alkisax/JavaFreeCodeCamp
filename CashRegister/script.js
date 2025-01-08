let statusC = "CLOSED"
let price = 3.26;

const priceTag = document.getElementById("price-tag");
priceTag.innerText = `Total: ${price}\$`

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
    1,    // PENNY (1 cent)
    5,    // NICKEL (5 cents)
    10,   // DIME (10 cents)
    25,   // QUARTER (25 cents)
    100,  // ONE (100 cents)
    500,  // FIVE (500 cents)
    1000, // TEN (1000 cents)
    2000, // TWENTY (2000 cents)
    10000 // ONE HUNDRED (10000 cents)
];

const cash = document.getElementById("cash");
const change = document.getElementById("change-due");
const button = document.getElementById("purchase-btn");

const sufficientMoneyChecker = (customerCash) => {
    if (price > customerCash) {
        alert("Customer does not have enough money to purchase the item")
        return "INSUFFICIENT FUNDS";
    } else if (price === customerCash) {
        change.innerText = "No change due - customer paid with exact cash"
        return "CLOSED";
    } else {
        return "OPEN";
    }
}

const changeCalculator = (customerCash) => {
    // const resultArray = [];
    const resultArray = Array(9).fill(0);

    let moneyChange = Math.round((customerCash - price) * 100); //make all in cents
    resultArray[8] = Math.floor(moneyChange / 10000);
    moneyChange %= 10000;
    resultArray[7] = Math.floor(moneyChange / 2000);
    moneyChange %= 2000;
    resultArray[6] = Math.floor(moneyChange / 1000);
    moneyChange %= 1000;
    resultArray[5] = Math.floor(moneyChange / 500);
    moneyChange %= 500;
    resultArray[4] = Math.floor(moneyChange / 100);
    moneyChange %= 100;
    resultArray[3] = Math.floor(moneyChange / 25);
    moneyChange %= 25;
    resultArray[2] = Math.floor(moneyChange / 10);
    moneyChange %= 10;
    resultArray[1] = Math.floor(moneyChange / 5);
    moneyChange %= 5;
    resultArray[0] = Math.floor(moneyChange / 1);
    console.log(`Result Array after calculating change: ${resultArray}`);
    return resultArray;
};

const changeCreator = (resultArray) => {
    console.log("cid:");
    console.log(cid)
    if (!resultArray) return;

    console.log(`Starting Change Creator with Result Array: ${resultArray}`);
    let resultString = `Status: ${statusC}\n`

    for (let i = 8; i >= 0; i--) {
        console.log(`Processing ${cid[i][0]}: Current Units Needed: ${resultArray[i]}`);
        console.log(`Available in Drawer for ${cid[i][0]}: ${cid[i][1]}`);  
        const maxUnits = Math.floor(cid[i][1] / (values [i] / 100));
        console.log(`Maximum Units Available in Drawer for ${cid[i][0]}: ${maxUnits}`);

        if (maxUnits >= resultArray[i]) {
            const unitsToUse = resultArray[i];
            if (unitsToUse > 0) {
                resultString += `${cid[i][0]}: \$${(unitsToUse * values[i] / 100).toFixed(2)}\n`;
            } 
            cid[i][1] -= unitsToUse * values[i];

        } else if (maxUnits > 0) {
            const unitsToUse = maxUnits;
            if (unitsToUse > 0) {
                resultString += `${cid[i][0]}: \$${(unitsToUse * values[i] / 100).toFixed(2)}\n`;
            }
            cid[i][1] -= unitsToUse * values[i]; // expect 0

            const remainingUnits = resultArray[i] - unitsToUse;
            console.log(`Remaining Units of ${cid[i][0]} to distribute: ${remainingUnits}`);
            if (i + 1 < 9) {
                resultArray[i + 1] += Math.ceil(remainingUnits * (values[i] / values[i+1]));
              }


        } else if (maxUnits === 0) {
            const remainingUnits = resultArray[i]
            console.log(`No Units Available for ${cid[i][0]}, passing ${remainingUnits} units to next denomination`);
            if (i + 1 < 9) {
                resultArray[i + 1] += Math.ceil(remainingUnits * (values[i] / values[i+1]));
            }
        }
        console.log(`Result Array after processing ${cid[i][0]}: ${resultArray}`);
    }
    resultString = resultString.trim()
    console.log(`Final Result String:\n${resultString}`);
    change.innerText = resultString;
};

button.addEventListener("click", () => {
    let customerCash = parseFloat(cash.value);

    // Check if the input is valid
    if (isNaN(customerCash)) {
        alert("Please enter a valid amount.");
        return; // Stop execution if input is invalid
    }

    statusC = sufficientMoneyChecker(customerCash);
    if (statusC !== "INSUFFICIENT FUNDS" && statusC !== "CLOSED") {
        const resultArray = changeCalculator(customerCash);
        changeCreator(resultArray);
    }
});




/**
 * 

                // // Calculate the remaining units for the next denomination
                // let remainingChange = (resultArray[i] - unitsToUse) * values[i];
                // for (let j = i - 1; j >= 0 && remainingChange > 0; j--) {
                //     resultArray[j] += Math.floor(remainingChange / values[j]);
                //     remainingChange %= values[j];
                // } 
 * 
 */