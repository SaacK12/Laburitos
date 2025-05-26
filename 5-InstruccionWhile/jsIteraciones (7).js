function Mostrar() {
    let ultimoNumero;
        let sumaAcumulada= 0
    while (ultimoNumero !== null) {    
    ultimoNumero= prompt("Ingrese un numero nuevamente");
    sumaAcumulada+= Number(ultimoNumero);
    console.log(sumaAcumulada);
}
let promedio= 0
promedio= sumaAcumulada / 5
document.getElementById("suma").value= ("La suma total es de: ") +sumaAcumulada
document.getElementById("promedio").value= ("El promedio total es: ") +promedio
}