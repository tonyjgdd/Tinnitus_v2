$(document).ready(function () {
    var botonAgregartabla = $('#agregartabla');

    botonAgregartabla.on('click', function () {
        var tablaOriginal = $('#miTabla');
        var tablaClonada = tablaOriginal.clone();

        // Limpiar los campos de entrada y áreas de texto en la tabla clonada
        tablaClonada.find('input, textarea').val('');

        // Agregar la tabla clonada después de la tabla original
        tablaOriginal.after(tablaClonada);
    });
});

