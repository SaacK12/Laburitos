function comenzar(){
const array= []
    for (let i = 1;  i <= 3; i++) { 
        array.push(i);
}
const indiceAleatorio= Math.floor(Math.random() * array.length)
numeroElegido= array[indiceAleatorio];
console.log("Numero elegido por la CPU: "+ numeroElegido)
}
function piedra(){
 switch (numeroElegido){
    case 1:
    alert("Empate!")
    comenzar()
    break;
    case 2:
    alert("Perdiste! Te gano la CPU!")
    comenzar()
    break;
    case 3:
    alert("Ganaste! Derrotaste a la CPU!")
    comenzar()
    break;
 }
}
function papel(){
 switch (numeroElegido){
    case 1:
    alert("Ganaste! Derrotaste a la CPU!")
    comenzar()
    break;
    case 2:
    alert("Empate!")
    comenzar()
    break;
    case 3:
    alert("Perdiste! Te gano la CPU!")
    comenzar()
    break;
 }
}
function tijera(){
switch (numeroElegido){
    case 1:
    alert("Perdiste! Te gano la CPU!")
    comenzar()
    break;
    case 2:
    alert("Ganaste! Derrotaste a la CPU!")
    comenzar()
    break;
    case 3:
    alert("Empate!")
    comenzar()
    break;
}
}