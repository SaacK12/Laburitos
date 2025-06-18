let numeroUno= 0
let numeroDos= 0
let operador= undefined
let resultado= 0
let respuesta= 0
function comenzar(){
    const array= []
    for (let i = 1; i <= 10; i++){
            array.push(i);
    }
    //Primer numero aleatorio:
    const indiceAleatorio1= Math.floor(Math.random() * array.length)
    numeroUno= array[indiceAleatorio1]
    //Segundo numero aleatorio:
    const indiceAleatorio2= Math.floor(Math.random() * array.length)
    numeroDos= array[indiceAleatorio2]
    //Operador aleatorio
    const operadores= ["+", "-", "/", "*"]
    operador= operadores[Math.floor(Math.random() * operadores.length)]
    document.getElementById("PrimerNumero").value= numeroUno;
    document.getElementById("SegundoNumero").value= numeroDos;
    document.getElementById("Operador").value= operador   
     // Limpiar input de respuesta
    document.getElementById("Respuesta").value = "";
    // Limpiar temporizador anterior si existe
    if (temporizador) {
        clearTimeout(temporizador);
}
// Iniciar temporizador de 10 segundos
    temporizador = setTimeout(function() {
        alert("¡Tiempo terminado!");
        Responder();
    }, 4000);

function Responder(){
     if (temporizador) {
        clearTimeout(temporizador);
        temporizador = null;
       }
respuesta = parseInt(document.getElementById("Respuesta").value);
if(isNaN(respuesta)){
    window.location.assign("https://youtu.be/ak0T_9-xTGI?si=k_cGzVEMjrcKo57m");// Aca estaba al pedo y me puse a boludear
}else{ 
switch(operador){
    case "+":
        resultado= numeroUno+numeroDos;
            if(respuesta== resultado){
            alert("Sos el mascapito") }
                else{
                alert("sos un boludo")
                }
    case "-":
        resultado= numeroUno-numeroDos;
            if(respuesta== resultado){
            alert("Sos el mascapito") }
                else{
                alert("sos un boludo")
                }
    case "*":
        resultado= numeroUno*numeroDos;
            if(respuesta== resultado){
            alert("Sos el mascapito") }
                else{
                alert("sos un boludo")
                }
    case "/":
        resultado= parseInt(numeroUno/numeroDos);
            if(respuesta== resultado){
            alert("Sos el mascapito") }
                else{
                alert("sos un boludo")
                }
}}}  }