document.getElementById('bold').addEventListener('click',function(){
    const textArea = getTextArea();
    const style = textArea.style.fontWeight;
    console.log(style);
    // if(textArea.style.fontWeight === 'bold'){
    //     textArea.style.fontWeight === 'normal';
    //     disable('bold');
    // }
    // else{
    //     textArea.style.fontWeight === 'bold';
    //     enable('bold');
    // }
})