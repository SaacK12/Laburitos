let delay; //declarado variable global
function inicio(){
    delay= setInterval(() => {
        alert("Sos un gil")
    }, 3000);    
}
    function fin(){
    clearInterval(delay)
    
     }
