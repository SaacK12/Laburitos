let tiempo= 0;
let temporizador= 0;
let colorEscogido
function comenzar(){
    const colores= ['azul', 'amarillo', 'marron', 'verde', 'celeste', 'rojo']
    colorEscogido= colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("ColorElejido").value =colorEscogido
    iniciarTemporizador()
    }
function iniciarTemporizador(){
    temporizador= setInterval(function() {
        tiempo++;
            console.log("Tiempo transcurrido:", tiempo, "segundos");
        }, 1000);
}
function detenerTemporizador(){
    clearInterval(temporizador);
}
function Responder(color){
    if(colorEscogido== color){ 
    detenerTemporizador() 
    alert("Felicidades, tardaste "+tiempo+" segundos.");
    window.location.assign("https://youtu.be/ak0T_9-xTGI?si=IAuwXpT-z6_XSkGb");
}
}