let partidasGanadas= 0
let partidasPerdidas= 0
let partidasEmpatadas= 0

function comenzar(){
const array= []
    for (let i = 1;  i <= 3; i++) { 
        array.push(i);
}
const indiceAleatorio= Math.floor(Math.random() * array.length)
numeroElegido= array[indiceAleatorio];
console.log(partidasGanadas)
console.log("Numero elegido por la CPU: "+ numeroElegido)
}
function piedra(){
 switch (numeroElegido){
    case 1:
    alert("Empate!")
    partidasEmpatadas++;
    document.getElementById("empatadas").value= "Veces que has empatado: "+partidasEmpatadas;
    comenzar()
    break;
    case 2:
    alert("Perdiste! Te gano la CPU!")
    partidasPerdidas++
    document.getElementById("perdidas").value= "Veces que has perdido: "+partidasPerdidas;
    comenzar()
    break;
    case 3:
    alert("Ganaste! Derrotaste a la CPU!")
    partidasGanadas++;
    document.getElementById("ganadas").value= "Veces que has ganado: "+partidasGanadas;
    comenzar()
    break;
 }
}
function papel(){
 switch (numeroElegido){
    case 1:
    alert("Ganaste! Derrotaste a la CPU!")
    partidasGanadas++;
    document.getElementById("ganadas").value= "Veces que has ganado: "+partidasGanadas;
    comenzar()
    break;
    case 2:
    alert("Empate!")
    partidasEmpatadas++;
    document.getElementById("empatadas").value= "Veces que has empatado: "+partidasEmpatadas;
    comenzar()
    break;
    case 3:
    alert("Perdiste! Te gano la CPU!")
    partidasPerdidas++
    document.getElementById("perdidas").value= "Veces que has perdido: "+partidasPerdidas;
    comenzar()
    break;
 }
}
function tijera(){
switch (numeroElegido){
    case 1:
    alert("Perdiste! Te gano la CPU!")
    partidasPerdidas++
    document.getElementById("perdidas").value= "Veces que has perdido: "+partidasPerdidas;
    comenzar()
    break;
    case 2:
    alert("Ganaste! Derrotaste a la CPU!")
    partidasGanadas++;
    document.getElementById("ganadas").value= "Veces que has ganado: "+partidasGanadas;
    comenzar()
    break;
    case 3:
    alert("Empate!")
    partidasEmpatadas++;
    document.getElementById("empatadas").value= "Veces que has empatado: "+partidasEmpatadas;
    comenzar()
    break;
}
}