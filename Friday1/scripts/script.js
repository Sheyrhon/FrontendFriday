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
    document.getElementById("result").value = result;
    userInput = "";
  } catch (error) {
    document.getElementById("result").value = "Error";
    userInput = "";
  }
};

const clearResult = () => {
  userInput = "";
  document.getElementById("result").value = "";
};

const Del = () => {
  userInput = "";
  document.getElementById("userInput");
  userInput.value = userInput.value.slice(0, -1);

  try {
    const result = eval(userInput.value);
    result.value = result;
  } catch (error) {
    result.value = "Error";
  }
};
