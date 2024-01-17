let userInput = '';
let problem = '';
//function is called when a number or decimal point is clicked, after 
//appending it updates the result by setting it to the result input fiels
const appendValue =(value)=>{
    userInput += value;
    document.getElementById('result').value= userInput;
    document.getElementById("problem").textContent = problem;
};
//this appends the operator when the operator button id clicked
const appendOperator = (operator)=>{
userInput +=operator;
document.getElementById('result').value = userInput;

};
// this function is called when the equal sign is clicked
// incase of error it catches and displays error
const calculate =()=>{
    try{
        const result = eval(userInput);
        document.getElementById('result').value= result;
        userInput='';
    } catch(error){
        document.getElementById('result').value ='Error';
        userInput ='';
    }
}
// this called when reset button is clicked, clears the expression screen adn sets
// it to an empty string
const clearResult=()=>{
    userInput='';
    document.getElementById('result').value = '';
}
// delete funtion
const Del=()=> {
    userInput='';
     document.getElementById('userInput');
    
    
    userInput.value = userInput.value.slice(0, -1);
    
    try {
      const result = eval(userInput.value);
      result.value = result;
    } catch (error) {
      result.value = 'Error';
    }
  }
