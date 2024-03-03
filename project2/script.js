
let input = document.querySelector("#price");
let error = document.querySelector("small");
let formulaire = document.querySelector("#form");

error.style.display = "none";

let randomNumber = Math.floor(Math.random() * 1001);
let i = 0;
let selectedNumber;


function verification(number) {
  let instruction = document.createElement("div");

  if (number < randomNumber) {
    
    instruction.textContent = "#" + i + " ( " + number + " ) It's more !";
    instruction.className = "instruction more";
  } else if (number > randomNumber) {
    
    instruction.textContent = "#" + i + " ( " + number + " ) It's less !";
    instruction.className = "instruction less";
  } else {

    instruction.textContent ="#" +i +" ( " +number +" ) Congratulations, you found the right price!";
    instruction.className = "instruction done";
    input.disabled = true;
  }

  document.querySelector("#instructions").prepend(instruction);
}


input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
   
    error.style.display = "inline";
  } else {
 
    error.style.display = "none";
  }
});

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    i++;
    input.style.borderColor = "silver";
    selectedNumber = input.value;
    input.value = "";
    verification(selectedNumber);
  }
});
