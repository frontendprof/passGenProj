const charRange = document.getElementById("charRange");
const charNumber = document.getElementById("charNumber");


const upper = document.getElementById("upper");
const nmbrs = document.getElementById("nums");
const symbls = document.getElementById("syms")

const passDisplay = document.querySelector(".password-display");


charNumber.addEventListener("input", syncInputAmount);
charRange.addEventListener("input", syncInputAmount);

function syncInputAmount(e) {
  const val = e.target.value;

  charNumber.value = val;
  charRange.value = val;
}

passGenForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberChars = charNumber.value;
  const upperIncld = upper.checked;
  const numberIncld = nmbrs.checked;
  const symblIncld = symbls.checked;
  const password = genPassword(numberChars, upperIncld, numberIncld, symblIncld);
  passDisplay.innerText = password;
});

function genPassword(numberChars, upperIncld, numberIncld, symblIncld) {

  let charCodes = LOWER_CASE_CODES;
  if (upperIncld) charCodes = charCodes.concat(UPPER_CASE_CODES);
  if (numberIncld) charCodes = charCodes.concat(NUMBER_CASE_CODES);
  if (symblIncld) charCodes = charCodes.concat(SYMBOL_CASE_CODES);

  const passCharacters = [];
  for (let i = 0; i < numberChars; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passCharacters.push(String.fromCharCode(characterCode));

  }
  return passCharacters.join('');


}


function lowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

const UPPER_CASE_CODES = lowToHigh(65, 90);
const LOWER_CASE_CODES = lowToHigh(97, 122);
const NUMBER_CASE_CODES = lowToHigh(48, 57);
const SYMBOL_CASE_CODES = lowToHigh(33, 47).concat(lowToHigh(58, 64)).concat(lowToHigh(91, 95)).concat(lowToHigh(123, 126))