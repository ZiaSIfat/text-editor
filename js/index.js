document.getElementById('bold').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.fontWeight ==='bold'){
        text.style.fontWeight = 'normal';
        disable('bold');
    }
    else{
        text.style.fontWeight = 'bold';
        enable('bold');
    } 
})
document.getElementById('italic').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.fontStyle ==='italic'){
        text.style.fontStyle = 'normal';
        disable('italic');
    }
    else{
        text.style.fontStyle = 'italic';
        enable('italic');
    } 
})
document.getElementById('underline').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.textDecoration ==='underline'){
        text.style.textDecoration = 'none';
        disable('underline');
    }
    else{
        text.style.textDecoration = 'underline';
        enable('underline');
    } 
})


