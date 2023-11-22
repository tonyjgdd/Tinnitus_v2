
function cargarImagen(input, idVistaPrevia) {
    const vistaPrevia = document.getElementById(idVistaPrevia);
    if (input.files && input.files[0]) {
        const lector = new FileReader();
        lector.onload = function (e) {
            vistaPrevia.src = e.target.result;
        };
        lector.readAsDataURL(input.files[0]);
    }
}