function MostrarAumento () {
    var nImporte= document.getElementById("importe").value;
 var enteroImporte= parseInt(nImporte)
 var descuento= 0.25
 var nResultado= enteroImporte * (1 + descuento)
 document.getElementById("resultado").value = nResultado
 }