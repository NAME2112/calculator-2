let display = document.querySelector('.display')


function showIndisplay(text){
display.value += text
}

function calculator(){
if(display.value == ''){

    alert('Expression Emty!')
}else{
    display.value = eval (display.value)
}

}

function cleardisplay (){
display.value =''

}';'