function Mostrar () {
    let sexo= prompt("Ingrese su Sexo (F o M)").toLowerCase();
    console.log (sexo)
    while (sexo!== "f" && sexo!== "m") //Comprueba que el valor NO SEA ni F o M
        { sexo= prompt("Error! Solo puede ingresar el caracter F para femenino o M para masculino")
            } 
if (sexo== "m") {
     document.getElementById("Sexo").value= "Masculino"
}
else{
        document.getElementById("Sexo").value= "Femino"
}
 }