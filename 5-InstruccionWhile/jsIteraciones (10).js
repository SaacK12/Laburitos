function Mostrar() { //Inicio variables
    let sumaNumerosPositivos= 0
    let sumaNumerosNegativos= 0
    let cantidadPositivos= 0
    let cantidadNegativos= 0
    let cantidadCeros= 0
    let cantidadPares= 0
    let promedioPositivos= 0
    let promedioNegativos= 0
    let diferencia= 0
    let numeros= 0
    //Fin variables 
 do { 
    numeros= parseInt(prompt("Ingrese Numero"));
    //Dependiendo delvalor, se sumara en 1 en estas variables:
        if (numeros== 0) { //Si es cero.
            cantidadCeros++
            console.log(cantidadCeros)
        }
        if (numeros > 0) { //Si es positivo.
            cantidadPositivos++
            sumaNumerosPositivos= sumaNumerosPositivos+ numeros
            console.log(sumaNumerosPositivos)
        }
        if (numeros < 0) { //Si es negativo.
            cantidadNegativos++
            sumaNumerosNegativos= sumaNumerosNegativos+ numeros
            console.log(sumaNumerosNegativos)
        }
        if (numeros % 2 == 0) {  //Si el numero ingresado es par.
            cantidadPares++
        }
    }
 while (!isNaN(numeros))
    //Calcular promedio de positivos.
    if (cantidadPositivos > 0) {
        promedioPositivos= sumaNumerosPositivos/ cantidadPositivos
        } else {
            promedioPositivos= 0
        }
    //Calcular promedio de negativos.
    if (cantidadNegativos > 0) {
    promedioNegativos= sumaNumerosNegativos/ cantidadNegativos
    } else {
        promedioNegativos= 0
    }
    //Difeencia entre positivos y negativos
    diferencia= cantidadPositivos- cantidadNegativos

    document.write("Suma de numeros positivos: "+ sumaNumerosPositivos +" Suma de numeros negativos: "+ sumaNumerosNegativos +" Cantidad total de numeros positivos: "+ cantidadPositivos +" Cantidad total de numeros negativos: : "+ cantidadNegativos +" Cantidad total de numeros ceros: "+ cantidadCeros +" Cantidad total de numeros pares: "+ cantidadPares +" Promedio de numeros positivos introducidos: "+ promedioPositivos +" Promedio de numeros negativos introducidos: "+ promedioNegativos +" Diferencia entre numeros positivos y negativos: "+ diferencia 
    )
   
}