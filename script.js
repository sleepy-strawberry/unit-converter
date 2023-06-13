let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let length = document.getElementById("length-p");
let volume = document.getElementById("volume-p");
let mass = document.getElementById("mass-p");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  length.innerHTML = `<p>${baseValue} meter = ${
    baseValue * meterToFeet
  } feet</p>`;

  volume.innerHTML = `<p>${baseValue} liters = ${
    baseValue * literToGallon
  } gallons</p>`;

  mass.innerHTML = `<p>${baseValue} kilograms = ${
    baseValue * kiloToPound
  } pounds</p>`;
});
