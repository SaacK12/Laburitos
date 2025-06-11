function inicio (){
    setTimeout(() => {
        fin()
    }, 3000);
}
function fin(){
    document.getElementById("secreto").style.visibility= 'visible'; 
}