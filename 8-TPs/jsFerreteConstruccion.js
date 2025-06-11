let largo, ancho, radio, perimetro, circuferencia, resultado, cemento, cal
function Rectangulo(){
largo= parseFloat(document.getElementById("Largo").value);
ancho= parseFloat(document.getElementById("Ancho").value);
perimetro= 2 * (largo+ancho);
//Calcular alambre
resultado= 3 * perimetro
alert("Alambre necesario para un terreno rectangular: "+ resultado.toFixed(2))
}
function Circulo(){
radio= parseFloat(document.getElementById("Radio").value)
circuferencia= 2 * Math.PI * radio
//Calcular alambre
resultado= circuferencia * 3
alert("Alambre necesario para un terreno circular: "+ resultado.toFixed(2))
}
function Materiales(){
    largo= parseFloat(document.getElementById("Largo").value);
ancho= parseFloat(document.getElementById("Ancho").value);
perimetro= 2 * (largo+ancho);
//Calcular materiales
const bolsasCementoPorMetro = 2;
const bolsasCalPorMetro = 3;
let resultadoCemento= bolsasCementoPorMetro* (largo*ancho)
let resultadoCal= bolsasCalPorMetro* (largo*ancho)
alert("Necesitas "+ resultadoCemento+" bolsas de cemento y "+resultadoCal+" bolsas de cal.")
//¿¿Esto realmente es asi?? Por que yo no tengo ni idea de estas cosas por que no soy albañil y tampoco esta mi papa para preguntarle, por cierto no tiene nada que ver pero tu saldrias con una mujer gordita? Yo definitivamente si.
}