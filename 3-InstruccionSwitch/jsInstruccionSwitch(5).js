function Mostrar () {
    var horaActual= parseInt(document.getElementById("hora").value);
    switch (true) {
case (horaActual >= 7 && horaActual <= 11):
            alert("Es de mañana");
            break;
        default:
            alert("No es de mañana");
            break;
}  
}
//No seria mejor usar un If en este caso? No hay tantas opciones ya definidas para manejar