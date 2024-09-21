// Detectar el scroll de la página
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        // Agregar la clase 'scrolled' cuando se desplaza más de 50px
        navbar.classList.add('scrolled');
    } else {
        // Eliminar la clase 'scrolled' si el desplazamiento es menor a 50px
        navbar.classList.remove('scrolled');
    }
};
