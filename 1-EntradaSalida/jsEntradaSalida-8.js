function SacarResto () {
    var nUno= document.getElementById("numeroDividendo").value;
 var nDos= document.getElementById("numeroDivisor").value;
 const enteroUno= parseInt(nUno)
 const enteroDos= parseInt(nDos)
 var resultado= enteroUno / enteroDos
 alert("La division es de: "+ resultado)
}