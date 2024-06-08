function getTextArea(){
    const textAreaField = document.getElementById('text-area');
    const textArea = textAreaField.value;
    return textArea;
}

function getInput(id){
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

function enable(id){
    const element = document.getElementById(id);
    element.style.backgroundColor = '84CC16';
    element.style.border = '1px solid black';
}

function disable(id){
    const element = document.getElementById(id);
    element.style.background = 'transparent';
    element.style.border = 'none';
}