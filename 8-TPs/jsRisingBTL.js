function ComenzarIngreso(){
let edad= undefined;
let sexo= undefined;
let estadoCivil= undefined;
let sueldo= undefined;
let legajo= undefined;
let nacionalidad= undefined;
//Edad
do { 
edad= prompt("Ingrese la edad")
if (isNaN(edad) || (edad > 90) || (edad < 18)) {
    alert("Por favor ingrese una edad valida.");
  }
   } while(isNaN(edad) || (edad > 90) || (edad < 18))
document.getElementById("Edad").value= edad  
//SEXOOOOOOOOOOOO
do { 
sexo= prompt("Ingrese sexo (M para masculino, F para femenino)").toUpperCase();
if (sexo != "F" && (sexo != "M")) {
    alert("Por favor ingrese un sexo valido (F o M)");
}
} while ((sexo != "F") && (sexo != "M"))
    document.getElementById("Sexo").value= sexo;
//Estado civil
do {
estadoCivil= prompt("Ingrese 1 si es soltero, 2 si es casado, 3 si esta divorciado, o 4 si esta viudo")
if (isNaN(estadoCivil) || (estadoCivil < 1) || (estadoCivil > 4)){
    alert("Por favor ingrese un numero valido.")
}
} while (isNaN(estadoCivil) || estadoCivil < 1 || estadoCivil > 4)
document.getElementById("EstadoCivil").value= estadoCivil;
//Sueldo
do {
sueldo= prompt("Ingrese el sueldo (No menor a 8000)")
if (isNaN(sueldo) || sueldo < 8000){
    alert("Por favor ingrese un sueldo valido.")
}
} while(isNaN(sueldo) || sueldo < 8000)  
document.getElementById("Sueldo").value= sueldo;
//Legajo
do {
legajo= prompt("Ingrese el legajo")
if (isNaN(legajo) && legajo < 1000 && legajo > 9999 ){
alert("Por favor ingrese un legajo valido.")
}
}while(isNaN(legajo) && legajo < 1000 && legajo > 9999)
document.getElementById("Legajo").value= legajo
//Nacionalidad
do {
nacionalidad= prompt("Ingrese una nacionalidad").toUpperCase();
if (nacionalidad != "A" && nacionalidad !="E" && nacionalidad != "N"){
    alert("Por favor ingrese una nacionalidad valida.")
}
} while(nacionalidad != "A" && nacionalidad !="E" && nacionalidad != "N")
document.getElementById("Nacionalidad").value= nacionalidad
}