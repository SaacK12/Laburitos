function Mostrar () {
    let ultimoNumero= null;
    let numeroMayor= 0
    let numeroMenor= 0

    ultimoNumero= parseInt(prompt("ingrese numero"))
            numeroMayor= ultimoNumero;
            numeroMenor= ultimoNumero;
               console.log(numeroMayor)
            console.log(numeroMenor)
    //whille
    while(!isNaN(ultimoNumero)) {
        ultimoNumero= parseInt(prompt("ingrese numero"))
            if (numeroMayor < ultimoNumero) {
                numeroMayor= ultimoNumero
            }
            if (numeroMenor > ultimoNumero) {
                numeroMenor= ultimoNumero
            }
            console.log(numeroMayor)
            console.log(numeroMenor)
  }
  document.getElementById("maximo").value= numeroMayor;
  document.getElementById("minimo").value= numeroMenor;
}