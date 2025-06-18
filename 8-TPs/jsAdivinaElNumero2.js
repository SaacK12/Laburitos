let numeroElegido= undefined;
let intentos= 0;

function comenzar(){
    const array= []
    for (let i = 1;  i <= 100; i++) { 
        array.push(i);
}
const indiceAleatorio= Math.floor(Math.random() * array.length)
numeroElegido= array[indiceAleatorio];
console.log("numero elegido: "+ numeroElegido)
intentos= 0
document.getElementById("intentos").value= intentos;
}

function verificar(){
let numeroIngresado= document.getElementById("numero").value;
if (numeroIngresado== numeroElegido){
    alert("¡Encontraste el numero secreto! ¡Y en solo "+ intentos+" intentos!");
    comenzar()
    return;
}
if (numeroIngresado != numeroElegido){
    intentos++;
    document.getElementById("intentos").value= intentos;
}
if (intentos== 1){ 
    alert("Usted es un psicopata")};
if (intentos== 2){ 
    alert("excelente percepción de las cosas!!!")};
if (intentos== 3){
    alert("Tuviste suerte en tu amor")};
if (intentos== 4){
    alert("Excelente técnica has empleado")};
if (intentos== 5){
    alert("Estas en la medida")};
if ((intentos >= 6) && (intentos <= 10)){
    alert("afortunado en el amor!!!")};
if(intentos== 11){
    document.write(
        "Mi amor secreto<br>" +
        "Pienso en ti todos los días<br>" +
        "Planeo qué decir<br>" +
        "No tienes idea, no tienes ni idea<br>" +
        "Cuánto pienso en ti<br>" +
        "Intento no mirarte fijamente, intento no esconderme<br>" +
        "Intento no demostrar que siempre he mentido<br>" +
        "Si te lo hubiera dicho antes<br>" +
        "Quizás no serías la misma<br>" +
        "Quiero decirte lo que siento<br>" +
        "Pero las voces en mi interior me hacen callar<br>" +
        "Así que lo guardo en mi corazón<br>" +
        "Esperando que nada se derrumbe<br>" +
        "Adondequiera que vayas, mi corazón te seguirá<br>" +
        "Pero tristemente, siempre, solo yo lo sabré<br>" +
        "Espero que mi corazón nunca se rompa<br>" +
        "Todo por mi amor no dicho")}
};
