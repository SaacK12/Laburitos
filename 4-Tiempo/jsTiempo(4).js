let delay;
let contador= 0;
function inicio(){ 
    delay= setInterval(() => {
       if (contador <= 4) 
      {  contador++
    alert("Sos re wuachin")
    console.log(contador)  }
    else { fin()} 
}, 2000);
}
function fin(){
    clearInterval(delay)
}
