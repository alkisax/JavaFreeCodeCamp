const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const regEx = /^1?\s?(\([023456789][1-9]{2}\)[\s\-]?|[023456789][1-9]{2}[\s\-]?)\s?[1-9]{3}[\s\-]?[1-9]{4}$/i;

/*
const regEx = new RegExp(
    [
        "^1?",                          // Optional leading '1'
        "\\s?",                         // Optional whitespace
        "(\\([023456789][1-9]{2}\\)[\\s\\-]?|", // Area code enclosed in parentheses
        "[023456789][1-9]{2}[\\s\\-]?)",       // Or area code without parentheses
        "\\s?",                         // Optional additional whitespace
        "[1-9]{3}",                     // Three digits (1-9)
        "[\\s\\-]?",                    // Optional whitespace or '-'
        "[1-9]{4}",                     // Four digits (1-9)
        "$"                             // End of the string
    ].join(""),
    "i" // Case-insensitive flag
);
*/

check.addEventListener("click", () => {
    phonechecker(input.value);
})

clear.addEventListener("click" , () => {
    results.textContent = "";
})

input.addEventListener("keydown", (e) => {
    if (e.key === "enter") {
        phonechecker(input.value);
    }
})

const phonechecker = (input) => {
    if (input === "") { //giati oxi .value
        alert("Please provide a phone number");
    } else if (regEx.test(input)) {
        results.textContent = `Valid US number: ${input}`;
    } else {
        results.textContent = `Invalid US number: ${input}`;
    }
}