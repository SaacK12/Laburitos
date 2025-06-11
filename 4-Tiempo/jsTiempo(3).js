let delay;
let giles= 0; 
function inicio(){
    delay= setInterval(() => {
        giles++
        alert("Sos un gil. "+"Contador de giles: "+giles)
    }, 2000);
}
function fin(){
    clearInterval(delay)
}