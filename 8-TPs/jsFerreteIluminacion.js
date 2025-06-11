function CalcularPrecio(){
let precio= 35
let cantidad= parseInt(document.getElementById("Cantidad").value)
let marca= document.getElementById("Marca")
let preciodescuento= parseFloat(document.getElementById("precioDescuento").value)
console.log(cantidad)


if(isNaN(cantidad) || cantidad <= 0){
    alert("Ingrese un numero valido o al menos 1 lampara")
}
if ((cantidad > 0)  && (cantidad < 6)){
preciodescuento= precio }
}