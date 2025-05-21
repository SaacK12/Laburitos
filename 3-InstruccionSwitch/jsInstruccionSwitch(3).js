function Mostrar () {
    var meses= document.getElementById("mes").value
    switch (meses) {
         case "Febrero":
         alert("Este mes no tiene mas de 29 dias")
         break;
        default:
            alert("Este mes tiene 30 dias o mas")
            break;
        }
      }