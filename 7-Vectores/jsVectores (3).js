function Mostrar(){
let numeros= []
let numeroIngresado= 0 
do {  numeroIngresado= prompt("Por favor ingrese numeros")
numeros.push(numeroIngresado)
console.log(numeros)
 } while(numeroIngresado!== "")
    document.write(numeros) 
}