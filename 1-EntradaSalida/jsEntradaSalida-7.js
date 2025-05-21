function sumar() {
 var nUno= document.getElementById("numeroUno").value;
 var nDos= document.getElementById("numeroDos").value;
 const enteroUno= parseInt(nUno)
 const enteroDos= parseInt(nDos)
 var resultado= enteroUno + enteroDos
 alert("La suma es: "+ resultado)
}
function restar() {
 var nUno= document.getElementById("numeroUno").value;
 var nDos= document.getElementById("numeroDos").value;
 const enteroUno= parseInt(nUno)
 const enteroDos= parseInt(nDos)
  var resultado= enteroUno - enteroDos
  alert("La resta es: "+ resultado)
}
function multiplicar() {
var nUno= document.getElementById("numeroUno").value;
 var nDos= document.getElementById("numeroDos").value;
 const enteroUno= parseInt(nUno)
 const enteroDos= parseInt(nDos)
 var resultado= enteroUno * enteroDos
 alert("La multiplicacion es de: "+ resultado)
}
function dividir () {
var nUno= document.getElementById("numeroUno").value;
 var nDos= document.getElementById("numeroDos").value;
 const enteroUno= parseInt(nUno)
 const enteroDos= parseInt(nDos)
 var resultado= enteroUno / enteroDos
 alert("La division es de: "+ resultado)
}