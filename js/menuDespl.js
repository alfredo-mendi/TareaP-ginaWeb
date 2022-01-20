function cambiaIdioma(idioma) {
    /*alert("hola");*/
    if (idioma == 1) { id1 = "es"; id2 = "cn" } else {
        id1 = "cn"; id2 = "es"
    };
    /* alert(id1);
    alert(id2);*/
    var colEs = document.getElementsByClassName('es'); /* Hay el mismo número de es que de cn */
    for (var i = 0, len = colEs.length; i < len; i++) {
        document.getElementsByClassName(id1)[i].style.display = "block";
        document.getElementsByClassName(id2)[i].style.display = "none";
    }
    /* var colPie = document.getElementsByClassName('pie-de-pagina es');
    for (var i = 0, len = colPie.length; i < len; i++) {
        document.getElementsByClassName("pie-de-pagina " + id1)[i].style.display = "flex";
    }*/
}