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
document.getElementById('left').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.textAlign ==='left'){
        text.style.textAlign = 'left';
        disable('left');
    }
    else{
        text.style.textAlign = 'left';
        enable('left');
    } 
})
document.getElementById('right').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.textAlign ==='right'){
        text.style.textAlign = 'left';
        disable('right');
    }
    else{
        text.style.textAlign = 'right';
        enable('right');
    } 
})
document.getElementById('center').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.textAlign ==='center'){
        text.style.textAlign = 'left';
        disable('center');
    }
    else{
        text.style.textAlign = 'center';
        enable('center');
    } 
})
document.getElementById('justify').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.textAlign ==='justify'){
        text.style.textAlign = 'left';
        disable('justify');
    }
    else{
        text.style.textAlign = 'justify';
        enable('justify');
    } 
})

document.getElementById('input-nmbr').addEventListener('change',function(){
    const text = getTextArea();
    const input = getInput('input-nmbr');
    text.style.fontSize = input + 'px';
})

document.getElementById('uppercase').addEventListener('click',function(){
    let text = getTextArea();
    if(text.style.textTransform ==='uppercase'){
        text.style.textTransform = 'lowercase';
        disable('uppercase');
    }
    else{
        text.style.textTransform = 'uppercase';
        enable('uppercase');
    } 
})


