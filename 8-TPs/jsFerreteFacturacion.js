let nUno, nDos, nTres, enteroUno, enteroDos, enteroTres
function Sumar(){
    nUno= document.getElementById("PrecioUno").value
    nDos= document.getElementById("PrecioDos").value
    nTres= document.getElementById("PrecioTres").value
    enteroUno= parseInt(nUno)
    enteroDos= parseInt(nDos)
    enteroTres= parseInt(nTres)
    //Sumar
    let suma= enteroUno + enteroDos + enteroTres
    if(isNaN(enteroUno) || isNaN(enteroDos) || isNaN(enteroTres))
        alert("Por favor ingrese numeros validos.")
        else{
    alert("Suma total: "+ suma)
     }
}
function Promedio(){
    nUno= document.getElementById("PrecioUno").value
    nDos= document.getElementById("PrecioDos").value
    nTres= document.getElementById("PrecioTres").value
    enteroUno= parseInt(nUno)
    enteroDos= parseInt(nDos)
    enteroTres= parseInt(nTres)
    //Promedio
    let suma= enteroUno + enteroDos + enteroTres
    suma= suma / 3
    if(isNaN(enteroUno) || isNaN(enteroDos) || isNaN(enteroTres))
        alert("Por favor ingrese numeros validos.")
        else{
    alert("Promedio total: "+ suma)
        }
}
function PrecioFinal(){
        nUno= document.getElementById("PrecioUno").value
    nDos= document.getElementById("PrecioDos").value
    nTres= document.getElementById("PrecioTres").value
    enteroUno= parseInt(nUno)
    enteroDos= parseInt(nDos)
    enteroTres= parseInt(nTres)
    //+IVA
    let suma= enteroUno + enteroDos + enteroTres
    suma= suma * 1.21;
     if(isNaN(enteroUno) || isNaN(enteroDos) || isNaN(enteroTres))
        alert("Por favor ingrese numeros validos.")
        else{
    alert("Precio final + IVA: "+ suma)
        }
}