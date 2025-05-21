function Mostrar () {
    let numero= parseInt(prompt("Ingrese un numero entre el 0 y 9"));
     while ((numero < 0 || numero > 10|| isNaN(numero)) ) { 
           numero= parseInt(prompt("Invalido! Intenta de nuevo"))
        }  
        alert("sos re wuachin")
}