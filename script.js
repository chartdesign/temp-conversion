
const temp1 = document.getElementById("firstTemp");
const temp2 = document.getElementById("temp2");

let radioBtns = document.querySelectorAll('input[name="temperature"]');
let result = document.getElementById("result");

function fromCelciusToFahrenheit(temp1) {
  return (temp1 * 9) / 5 + 32;
}

function fromFahrenheitToCelcius(temp1) {
  return ((temp1 - 32) * 5) / 9;
}

let findSelected = () => {
  let selected = document.querySelector(
    'input[name="temperature"]:checked'
  ).value;
  // result.innerHTML = `Value is ${selected}`;
  if (selected === "CEL") {
    result.innerHTML = fromCelciusToFahrenheit(temp1.value);
  } else {
    result.innerHTML = fromFahrenheitToCelcius(temp1.value);
  
  }
  return selected;
};

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelected);
});

findSelected();
