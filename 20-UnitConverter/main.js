const inputs = document.querySelectorAll(".contenders-container input");
confirmBtn = document.querySelector(".confirm-btn");
reloadBtn = document.querySelector(".reload-btn");

function inputToOutput() {
  inputs.forEach((input) => {
    input.addEventListener("keyup", function (e) {
      if (e.keyCode === 13 && e.target.value !== "") {
        const targetInputValue = e.target.value;
        if(e.target.id === "mass") {
          e.target.parentElement.innerHTML = `<span class="output" id="mass">${targetInputValue}kg</span>`;
        } else if (e.target.id === "dis") {
          e.target.parentElement.innerHTML = `<span class="output" id="dis">${targetInputValue}m</span>`;
        } else {
          e.target.parentElement.innerHTML = `<span class="output" id="age">${targetInputValue}y</span>`;
        }
      }
    });
  });
}

inputToOutput();

confirmBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    const parent = input.parentElement;
    if (!parent) return;

    if (input.value !== "" && input.classList.contains("blank") === false) {
      const targetInputValue = input.value;
      if(input.id === "mass") {
        input.parentElement.innerHTML = `<span class="output" id="mass">${targetInputValue}kg</span>`;
      } else if (input.id === "dis") {
        input.parentElement.innerHTML = `<span class="output" id="dis">${targetInputValue}m</span>`;
      } else {
        input.parentElement.innerHTML = `<span class="output" id="age">${targetInputValue}y</span>`;
      }
    } else {
      input.parentElement.innerHTML = `<input type="text" class="blank" placeholder="—" />`;
    }
  });
});

reloadBtn.addEventListener("click", () => {
  location.reload();
});

function convertUnits() {
  const unitsSystem = document.querySelector(".units-system");
  unitsSystem.addEventListener("change", () => {
    const allOutputs = document.querySelectorAll(".contenders-container span");

    const lbstoKg = 0.453592;
    const kgtoLbs = 2.20462;
    const fttoM = 0.3048;
    const mtoFt = 3.28084;

    allOutputs.forEach((output) => {
      let value = parseFloat(output.innerHTML);

      if(unitsSystem.childNodes[3].checked == true && output.id == "mass") {
        output.innerHTML = `${(value * kgtoLbs).toFixed(1)}lbs`;
      }
      if (unitsSystem.childNodes[3].checked == false && output.id == "mass") {
        output.innerHTML = `${(value * lbstoKg).toFixed(1)}kg`;
      }
      if (unitsSystem.childNodes[3].checked == true && output.id == "dis") {
        output.innerHTML = `${(value * mtoFt).toFixed(1)}ft`;
      }
      if (unitsSystem.childNodes[3].checked == false && output.id == "dis") {
        output.innerHTML = `${(value * fttoM).toFixed(1)}m`;
      }
    })
  })
};

convertUnits();
