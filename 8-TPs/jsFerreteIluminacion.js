let resultado= 0;

function CalcularPrecio(){
let precio= 35
let cantidad= parseInt(document.getElementById("Cantidad").value);;
let marca= document.getElementById("Marca").value;
let preciodescuento= 0;
let resultadoElemento= document.getElementById("precioDescuento");
let ingresosBrutos= 0

//Validar que la cantidad sea un numero y que no sea 0 o menos
if(isNaN(cantidad) || cantidad <= 0){
    alert("Ingrese un numero valido o al menos 1 lampara")
    return;
}
//Item A
//Si se comprar 6 o MAS lamparas se evitara entrar al switch
 if (cantidad >= 6){
    preciodescuento= parseInt(precio * cantidad * 0.5);
        resultado= (precio * cantidad) - preciodescuento;
        //Si el precio esde 120 o mas
        if(resultado >= 120){ 
             impuesto()}
        else{ 
        resultadoElemento.value="$"+ resultado;
         }
        return;
 }
switch(cantidad){
    //Item B
    case 5:
        switch(marca){
            case "ArgentinaLuz":
                preciodescuento= parseInt(precio * cantidad * 0.4);
                resultado= (precio * cantidad) - preciodescuento
                resultadoElemento.value="$"+ resultado;
                break;
            default:
                preciodescuento= parseInt(precio * cantidad * 0.3);
                resultado= (precio * cantidad) - preciodescuento
                resultadoElemento.value="$"+ resultado;
                break;
         }
         break;
    //Item C
    case 4:
        switch(marca){
            case "ArgentinaLuz":
            case "FelipeLamparas":
                preciodescuento= parseInt(precio * cantidad * 0.25);
                resultado= (precio * cantidad) - preciodescuento
                resultadoElemento.value="$"+ resultado;
                return;
                break; //Aca puse return antes del break, asi que no se si esta al pedo los break pero que mas da sale un balatro
            default:
                preciodescuento= parseInt(precio * cantidad * 0.2);
                resultado= (precio * cantidad) - preciodescuento
                resultadoElemento.value="$"+ resultado;
                return;
                break;
                }
    //Item D
    case 3:
        switch(marca){
            case "ArgentinaLuz":
                preciodescuento= parseInt(precio * cantidad * 0.15);
                resultado= (precio * cantidad) - preciodescuento
                resultadoElemento.value="$"+ resultado;
                return;
                break;
            case "FelipeLamparas":
                preciodescuento= parseInt(precio * cantidad * 0.1);
                resultado= (precio * cantidad) - preciodescuento
                resultadoElemento.value="$"+ resultado;
                return;
                break;
            default:
                preciodescuento= parseInt(precio * cantidad * 0.05);
                resultado= (precio * cantidad) - preciodescuento
                resultadoElemento.value="$"+ resultado;
                return;
                break;
        }
    //Si no se cumple ningun item y no hay descuento
    default:
        resultado= precio * cantidad
        resultadoElemento.value="$"+ resultado+(" (No hay descuento disponible)");
        break;
         }
          }
//Sumarle impuesto
function impuesto(){
    let impuestoSumado = resultado * 0.10;
    resultado = resultado + impuestoSumado;
    alert("Usted pagó $" + impuestoSumado.toFixed(2) + " de IIBB.");
    let resultadoElemento = document.getElementById("precioDescuento");
    resultadoElemento.value = "$" + resultado.toFixed(2);
}