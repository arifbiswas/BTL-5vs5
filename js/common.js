function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputValueString = inputFeild.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function getElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}
function setElementValue(elementId, elementValue) {
    const element = document.getElementById(elementId);
     element.innerText = elementValue;
    
}