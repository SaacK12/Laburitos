function Mostrar(){
let numeros= []
let numeroIngresado= 0 
do {  
    numeroIngresado= prompt("Por favor ingrese numeros");
    if (numeroIngresado === "") break;
    if (!isNaN(numeroIngresado) && numeroIngresado.trim() !== ""){
        numeros.push(Number(numeroIngresado));
    } else{
        alert("Por favor solo numeros validos");
    }
    console.log(numeros);
    }  
while(true)
let sumatoria = numeros.reduce(
    (sum, item) => sum + item,
    0
);
    document.write("Numeros totales: "+ numeros +". Sumatoria: "+ sumatoria) 
}