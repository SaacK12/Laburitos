function Mostrar () {
    var horaActual= parseInt(document.getElementById("hora").value);
    switch (true) {
case (horaActual >= 7 && horaActual <= 11):
            alert("Es de mañana");
            break;
case (horaActual >= 12 && horaActual <= 19):
            alert("Es tarde");
            break;
case (horaActual >= 20 && horaActual <= 24) || (horaActual >= 0 && horaActual <= 6):
            alert("Es de noche");
            break;
default:
alert("La hora no existe")
break;
}
 }