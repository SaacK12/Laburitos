let start= 0
function inicio(){
  min = Math.ceil(2000);
  max = Math.floor(12000);
  numeroaleatorio= Math.floor(Math.random() * (max - min + 1) + min);
  console.log(numeroaleatorio)

      setTimeout(() => {
            segundosEnElAire()
    }, numeroaleatorio);
}
function segundosEnElAire(){
document.getElementById("secreto").style.visibility="visible"
    start= Date.now();
}
function ContarMilisegundos(){
    const result= Date.now() - start;
    alert("Tiempo transcurrido en milisegundos: "+ result)
}