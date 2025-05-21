function Mostrar () {
    var meses= document.getElementById("mes").value
    switch (meses) {
         case "Febrero": 
            alert("Este mes tiene 28 dias")
                break;
         case "Abril":
         case "Junio":
         case "Septiembre":
         case "Noviembre":
            alert("Este mes tiene 30 dias")
                break;
        default:
            alert("Este mes tiene 31 dias")
                break;
                 }
                   }
