function CalcularPrecio(){
let precio= 35
let cantidad= parseInt(document.getElementById("Cantidad").value);;
let marca= document.getElementById("Marca").value;
let preciodescuento= 0
let resultado= document.getElementById.value

//NOTA: Remplaza los alert por el ID
if(isNaN(cantidad) || cantidad <= 0){
    alert("Ingrese un numero valido o al menos 1 lampara")
    return;
}

switch(cantidad){
    //Item A
    case 6: 
        preciodescuento= parseInt(precio * cantidad * 0.5);
        resultado= (precio * cantidad) - preciodescuento;
        alert("Precio con descuento: "+resultado);
        break;
    //Item B
    case 5:
        switch(marca){
            case "ArgentinaLuz":
                preciodescuento= parseInt(precio * cantidad * 0.4);
                resultado= (precio * cantidad) - preciodescuento
                alert("Precio con descuento: "+resultado);
                break;
                default:
        preciodescuento= parseInt(precio * cantidad * 0.3);
        resultado= (precio * cantidad) - preciodescuento
        alert("Precio con descuento: "+resultado);
        break;
         }
         break;
    //Item C
    case 4:
        switch(marca){
            case "ArgentinaLuz": //Para arreglar ahora me da pereza, puedo en este caso puedo cambiar el switch por un if.
            case "FelipeLamparas":
                preciodescuento= parseInt(precio * cantidad * 0.25);
                resultado= (precio * cantidad) - preciodescuento
                alert("Precio con descuento: "+resultado);
                break;
            default:
                preciodescuento= parseInt(precio * cantidad * 0.2);
                resultado= (precio * cantidad) - preciodescuento
                alert("Precio con descuento: "+resultado);
                break;
                }
    //Item D
    case 3:
        switch(marca){
            case "ArgentinaLuz":
                preciodescuento= parseInt(precio * cantidad * 0.15);
                resultado= (precio * cantidad) - preciodescuento
                alert("Precio con descuento: "+resultado);
                break;
            case "FelipeLamparas":
                preciodescuento= parseInt(precio * cantidad * 0.1);
                resultado= (precio * cantidad) - preciodescuento
                alert("Precio con descuento: "+resultado);
                break;
            default:
                preciodescuento= parseInt(precio * cantidad * 0.05);
                resultado= (precio * cantidad) - preciodescuento
                alert("Precio con descuento: "+resultado);
                break;
        }
         }
          }
//35 * 5*  0,4