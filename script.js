const display = document.querySelector(".displays");
const output = document.querySelector(".output");
const oprators = document.querySelectorAll("[data-oprator]");
let oprents = document.querySelectorAll("[data-oprent]");
const equal = document.querySelector("[data-equal]");
const allclear = document.querySelector("[data-clear]");
const deletes = document.querySelector("[data-delete]");
let string = "";
let calc = 0;
let result = 0;

let currentOprent = "";
let previousOprent = "";
let oprator = undefined;

handleDelete = () => {
  currentOprent = currentOprent.toString().slice(0, -1);
  updateDisplay();
};

handleclear = () => {
  currentOprent = "";
  previousOprent = "";
  oprator = undefined;
  updateDisplay();
};

handleEqual = () => {
  compute();
  updateDisplay();
};

handleOprator = (opra) => {
  previousOprent = currentOprent;
  currentOprent = "";
  oprator = opra;
  updateDisplay();
};

updateDisplay = () => {
  output.innerHTML = currentOprent;
  if (oprator != null) {
    display.innerHTML = `${previousOprent} ${oprator}`;

    
  } else {
    display.innerHTML = "";
  }
};

appendNumbers = (number) => {
  if (number === "." && currentOprent.includes(".")) return;
  currentOprent = currentOprent + number;
  updateDisplay();
};

compute = () => {
  switch (oprator) {
    case "+":
      result = parseFloat(currentOprent) + parseFloat(previousOprent);
      break;
    case "-":
      result = parseFloat(currentOprent) - parseFloat(previousOprent);
      break;
    case "*":
      result = parseFloat(currentOprent) * parseFloat(previousOprent);
      break;
    case "/":
      result = parseFloat(currentOprent) / parseFloat(previousOprent);
  }
 
  currentOprent = result;
  previousOprent = "";
  oprator = "";
};

Array.from(oprators).forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOprator(button.innerHTML);
  });
});

Array.from(oprents).forEach((oprent) => {
  oprent.addEventListener("click", (e) => {
    appendNumbers(oprent.innerHTML);
  });
});

deletes.addEventListener("click", handleDelete);
allclear.addEventListener("click", handleclear);
equal.addEventListener("click", handleEqual);
