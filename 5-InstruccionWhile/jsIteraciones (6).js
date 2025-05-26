function Mostrar() {
    let ultimoNumero;
    let sumaAcumulada= 0
    let vueltas= 0
            ultimoNumero= prompt("Ingresa UN numero para informar la suma acumulada y el promedio.");
            sumaAcumulada+= Number(ultimoNumero);
            vueltas++;   
    do {    
    ultimoNumero= prompt("Ingrese otro numero nuevamente");
    sumaAcumulada+= Number(ultimoNumero);
    console.log(sumaAcumulada);
    vueltas++}
while (vueltas < 5)
let promedio= 0
promedio= sumaAcumulada / 5
document.getElementById("suma").value= sumaAcumulada
document.getElementById("promedio").value= promedio

 }