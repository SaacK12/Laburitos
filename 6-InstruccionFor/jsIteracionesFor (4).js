function Mostrar () {
    for (let contador= 0; ;contador++) {
        let repuesta = confirm("Este mensaje se mostro "+contador +", ¿Seguir contando?");
            if(!repuesta) {
                break; 
            }
    }
} //No se si hace sea como se deba resolver la actividad :P