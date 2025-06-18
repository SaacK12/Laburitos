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
if (numeroIngresado < numeroElegido){
    intentos++;
    document.getElementById("intentos").value= intentos;
    alert("Aun te falta para llegar al numero secreto. Intentos: "+ intentos);
}
if (numeroIngresado > numeroElegido){
    intentos++;
    document.getElementById("intentos").value= intentos;
    alert("Te pasaste del numero secreto. Intentos: "+ intentos);
}
 }