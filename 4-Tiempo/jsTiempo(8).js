const start= Date.now();


function inicio(){
    setTimeout(() => {
        document.getElementById("secreto").style.visibility= "visible"
        console.log("Tiempo inicio: "+start)
    }, 1000);
}
function ContarMilisegundos(){    
    const result= Date.now() - start;
    alert("Diferencia en minisegundos desde que precionaste Iniciar y El Oculto: "+ result)
}