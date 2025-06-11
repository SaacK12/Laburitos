let fahrenheit, celsius
function FahrenheitCentigrados(){
fahrenheit= parseFloat(document.getElementById("Temperatura").value);
celsius= (fahrenheit - 32) * 5/9;
alert("La temperatura "+fahrenheit+" °F a Celsius es de: "+ celsius.toFixed(1)+" °C");
}
function CentigradosFahrenheit(){
celsius= parseFloat(document.getElementById("Temperatura").value);
fahrenheit= (celsius * 9/5) +32;
alert("La temperatura "+ celsius+" °C a Fahrenheit es de: "+ fahrenheit+" °F");
}