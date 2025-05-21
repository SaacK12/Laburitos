function MostrarAumento () {
    var Sueldo= document.getElementById("sueldo").value;
 var enteroSueldo= parseInt(Sueldo)
 var aumento= 0.10;
var nSueldo= enteroSueldo * (1 + aumento)
document.getElementById("resultado").value = nSueldo;
}