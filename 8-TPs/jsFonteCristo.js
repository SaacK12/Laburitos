let numero= 0
function NumerosPares(){
let numerosPares= 0
numero= document.getElementById("numero").value;
for (let i=0; i<= numero; i++){
    if (i % 2 === 0)
        {numerosPares++}
}
    alert("La cantidad de numeros pares es: "+numerosPares)
}
function NumerosImpares(){
let NumerosImpares= 0
numero= document.getElementById("numero").value;
for (let i=0; i <= numero; i++){
    if (i % 2 != 0)
    {NumerosImpares++}
}
alert("La cantidad de numeros impares es: "+ NumerosImpares)
}
function NumerosDivisibles(){
let NumerosDivisibles= 0
numero= document.getElementById("numero").value;
for (let i= 1; i <= 100; i++){
    if (i % numero === 0)
        {NumerosDivisibles++}
}
alert("El numero de divisores que tiene este numero es de "+NumerosDivisibles)
}
function VerificarPrimo(){
    let esPrimo= true
    let numero= parseInt(document.getElementById("numero").value);
    if (numero <= 1){
        esPrimo= false
    } else {
        for (let i=2; i <= Math.sqrt(numero); i++){
            if (numero % i === 0) {
                esPrimo= false
                break
            }
        }
    }
    if (esPrimo){
        alert(numero+ " es un numero primo")
    } else {
        alert(numero + " no es un numero primo")
    }
}
function NumerosPrimos(){
    let cantidadPrimos= 0;
    let numero= parseInt(document.getElementById("numero").value);
    for (let n= numero; n >= 2; n--){
        let esPrimo= true;
        for (let i= 2; i <=Math.sqrt(n); i++){
            if (n % i === 0){
                esPrimo= false;
                break;
            }
        }
        if (esPrimo) {
            cantidadPrimos++;
        }
    }
    alert("La cantidad de numeros primos es: "+ cantidadPrimos);
}