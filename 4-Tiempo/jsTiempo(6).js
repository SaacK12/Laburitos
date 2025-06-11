function inicio() {    
fin()
setTimeout(() => {
    document.getElementById("secreto").style.display= 'block';
}, 3000);
}

function fin(){
 document.getElementById("secreto").style.display= 'none';
}