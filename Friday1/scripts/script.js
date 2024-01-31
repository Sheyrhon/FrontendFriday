let userInput = "";
let problem = "";

const appendValue = (value) => {
  userInput += value;
  document.getElementById("result").value = userInput;
  document.getElementById("problem").textContent = problem;
};

const appendOperator = (operator) => {
  userInput += operator;
  document.getElementById("result").value = userInput;
};

const calculate = () => {
  try {
    const result = eval(userInput);

    if (Number.isNaN(result)) {
      throw new Error("Invalid operation");
    }

    document.getElementById("result").value = result;
    userInput = "";
  } catch (error) {
    document.getElementById("result").value = error.message;
    userInput = "";
  }
};
const clearResult = () => {
  userInput = "";
  document.getElementById("result").value = "";
};




