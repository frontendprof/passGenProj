const charRange = document.getElementById("charRange");
const charNumber = document.getElementById("charNumber");

charNumber.addEventListener("input", syncInputAmount);
charRange.addEventListener("input", syncInputAmount);

function syncInputAmount(e) {
  const val = e.target.value;

  charNumber.value = val;
  charRange.value = val;
}
