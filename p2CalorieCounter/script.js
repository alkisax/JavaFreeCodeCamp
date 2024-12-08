const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g; 
    // /me ta / εννοώ οτι αυτό που γράφω είναι regex και ψαχνω αν μεσα στο string μου ειπάρχουν + ή -. To \s είναι whtiespace. To g μετα τα τα / σημαίνει να συνεχίσει να ψαχνει και αφου βρει ένα. Αντίστιχα /i είναι case insensitive
    return str.replace(regex, '');
}

//Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}


// βημα 40-53
function addEntry() {
    // δηλαδή θέλω το id άπο το dropdown. και απο εκεί θέλω το child με .input-container. to βάζω μέσα σε `` για να το κατασκευάσω
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    // αυτό είναι για να μετρίσω τις εγραφές. Το κάνω με το .length
    const entryNumber = (targetInputContainer.querySelectorAll('input[type="text"]').length) + 1;

    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
    // targetInputContainer.innerHTML += HTMLString;
    //Syntax: element.insertAdjacentHTML(position, text);
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString );
}

//68-88
// e είναι event (έτσι συνηθίζετε να το ονομάζουν)
//This will return any number inputs that are in the #breakfast element.
// ta [] προστέθηκαν γιατι η getCaloriesFromInputs έχει για input ένα array
//Example Code
// const paragraphElement = document.getElementById('paragraph');
// paragraphElement.classList.remove('hide');

function calculateCalories(e) {
e.preventDefault();
isError = false;

const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

if (isError) {
    return;
}

const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
output.innerHTML = `
<span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
<hr>
<p>${budgetCalories} Calories Budgeted</p>
<p>${consumedCalories} Calories Consumed</p>
<p>${exerciseCalories} Calories Burned</p>
`;

output.classList.remove('hide');
}

//57-67
function getCaloriesFromInputs(list) {
let calories = 0;

for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
    alert(`Invalid Input: ${invalidInputMatch[0]}`);
    isError = true;
    return null;
    }
    calories += Number(currVal);
}
return calories;
}

//90-
//Remember that document.querySelectorAll returns a NodeList, which is array-like but is not an array. However, the Array object has a .from() method that accepts an array-like and returns an array. This is helpful when you want access to more robust array methods, which you will learn about in a future project.-- const listItemsArray = Array.from(document.querySelectorAll('li'));

function clearForm(){
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (const container of inputContainers) {
    container.innerHTML = '';
  }

  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide')
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener('click', clearForm);