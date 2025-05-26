function Mostrar() {
        let numerosPositivos= [];  //Variables
        let numerosNegativos= [];
        let totalPositivos= 0
        let totalNegativos= 1
        let ultimoNumero= 0
//Inicio while
    while (!isNaN(ultimoNumero)) {
            ultimoNumero= prompt("ingrese numero")            
                if (ultimoNumero === null) break;
                    ultimoNumero = parseInt(ultimoNumero);     
                          if (isNaN(ultimoNumero)) break;   
             
    if (ultimoNumero > 0) {            
        numerosPositivos.push(ultimoNumero)
            console.log(numerosPositivos) }

        else {
                numerosNegativos.push(ultimoNumero)
                    console.log(numerosNegativos) 
        } 
        }
    //inicio For, esto sumara los positivos
    for  (let i= 0; i< numerosPositivos.length; i++) {
        totalPositivos+= numerosPositivos[i] 
    }
    for  (let i= 0; i< numerosNegativos.length; i++) {
        totalNegativos *= numerosNegativos[i] 
    }
document.getElementById("suma").value= totalPositivos;
document.getElementById("producto").value= totalNegativos;  

 }