const numArabic = document.getElementById("number");
const btnConvert = document.getElementById("convert-btn");
const out = document.getElementById("output");

const letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const digits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const huns = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']

const num = parseInt(numArabic, 10);

btnConvert.addEventListener("click", () => {
    numChecker(numArabic.value);
});

numArabic.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        numChecker(numArabic.value);
    };
});

const numChecker = (numArabic) => {
    if (numArabic === "" || isNaN(numArabic)) {
        out.innerText = "Please enter a valid number";
    } else if (numArabic < 1) {
        out.innerText = "Please enter a number greater than or equal to 1";
    } else if (numArabic >= 4000) {
        out.innerText = "Please enter a number less than or equal to 3999";
    } else {
        out.innerText = converter(numArabic);
    }
};

const converter = (num) => {
    let numRoman = '';
    const thousands = Math.floor(num / 1000);
    const modThousands = num % 1000;
    for (let i = 0; i < thousands; i++) {
        numRoman += 'M'
    }

    const hundreds = Math.floor(modThousands / 100);
    const modHundreds = modThousands % 100;
    numRoman += huns[hundreds]

    const tenths = Math.floor(modHundreds / 10);
    const modTenths = modHundreds % 10;
    numRoman += tens[tenths];
    numRoman += digits[modTenths];

    return numRoman;
};