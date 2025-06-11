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
    console.log(result)
    switch(true) {
        case (result >= 0 && result <=500):
           return alert("sos sonic")
        case (result >= 501 && result <=1000):
            return alert("sos bien rapido")
        case (result >= 1001 && result <=3000):
            return alert("que lento")
        default:
            return alert("empeza a activar")
        

    }
}