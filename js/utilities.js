function getTextArea(){
    const textAreaField = document.getElementById('text-area');
    return textAreaField;
}

function getInput(id){
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

function enable(id){
    const element = document.getElementById(id);
    element.style.fontSize = '20px';
}

function disable(id){
    const element = document.getElementById(id);
    element.style.fontSize = '100%';
}
