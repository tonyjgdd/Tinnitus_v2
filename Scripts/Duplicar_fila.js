$(document).ready(function () {
    var botonAgregarFila = $('#agregarFila');
    var tabla = $('#miTabla tbody');

    botonAgregarFila.on('click', function () {
        var filaSuperior = $('#miTabla tbody tr:eq(1)').clone();
        filaSuperior.find('input, textarea').val('');
        var filas = tabla.find('tr');

        if (filas.length > 1) {
            // Obtener el número de la última fila y aumentarlo en 1
            var ultimoNumero = parseInt(filas.eq(filas.length - 1).find('td:first').text());
            var nuevoNumero = ultimoNumero + 1;

            // Modificar el primer casillero con el nuevo número
            filaSuperior.find('td:first').text(nuevoNumero);
        }

        tabla.append(filaSuperior);
    });
});