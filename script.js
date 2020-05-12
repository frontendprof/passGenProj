const charRange=document.getElementById("charRange")
const charNumber=document.getElementById("charNumber")

// Defining event listeners

charRange.addEventListener("input",syncCharAmount)
charNumber.addEventListener("input",syncCharAmount)

function syncCharAmount(e){
    const value=e.target.value;
    charRange.value=value;
    charNumber.value=value;
}

