function Mostrar () {
let numeroIngresado = parseInt(prompt("Por favor ingrese un número"));
    let resultado= 0
    for (let i= 1; i<= numeroIngresado; i++){ 
        if (numeroIngresado % i === 0) 
            {resultado++} }
    alert("El numero de divisores que tiene este numero es de "+ resultado)
}