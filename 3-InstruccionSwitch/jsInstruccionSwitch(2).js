function Mostrar () {
    var meses= document.getElementById("mes").value
    switch (meses) {
        case "Julio":
        case "Agosto":
             alert("Hace un re frio")
                break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
        case "Enero":
        case "Febrero":
            alert ("Ya no hace frio, ahora hace un re calor")
             break;
        default:
        alert("Aun falta para el invierno")
         break;
          }
        }