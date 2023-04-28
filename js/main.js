
const btnMenuEmail = document.querySelector('.navbar-email');
const contMenu = document.querySelector('.desktop-menu');

btnMenuEmail.addEventListener('click', activarMenuP);
// Para no poner el onclick en el html podemos hacerlo de esta manera.

function activarMenuP() {
    contMenu.classList.toggle('active');
}