const charRange = document.getElementById("charRange")
const charNumber = document.getElementById("charNumber")
const passGenForm = document.getElementById("passGenForm")
const caseIncldElem = document.getElementById("upper")
const numIncldElem = document.getElementById("nums")
const symIncldElem = document.getElementById("syms")


const UPPERCASE_CHAR_CODES = arrayRange(65, 90)
const LOWERCASE_CHAR_CODES = arrayRange(97, 122)
const NUMBER_CHAR_CODES = arrayRange(48, 57)
const SYMBOL_CHAR_CODES = arrayRange(33, 47).concat(arrayRange(58, 126))


charRange.addEventListener("input", syncCharAmount)
charNumber.addEventListener("input", syncCharAmount)


passGenForm.addEventListener("submit", e => {
    e.preventDefault()

    const charAmount = charNumber.value;
    const caseIncld = caseIncldElem.checked
    const numIncld = numIncldElem.checked
    const symIncld = symIncldElem.checked


    const passWord = generatePassword(charAmount, caseIncld, numIncld, symIncld)
})

function generatePassword(a, b, c, d) {
    console.log(LOWERCASE_CHAR_CODES);



}


function arrayRange(low, high) {
    const array = [];
    for (let i = low; i < high.length; i++) {
        array.push(i)
    }
    return array
}



function syncCharAmount(e) {
    const value = e.target.value;
    charRange.value = value;
    charNumber.value = value;
}