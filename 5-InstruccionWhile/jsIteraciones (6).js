function MostrarAumento() {
    let ultimoNumero
    let sumaAcumulada
    let vueltas= 0
    do { for (i= 0; i < 5; i++){
        ultimoNumero= prompt("Ingresa un numero para informar la suma acumulada y el promedio. Luego de esta pestaña se te volvera a pedir")
sumaAcumulada= ++ultimoNumero }
    } while (vueltas== 5)
}