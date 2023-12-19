
document.addEventListener('DOMContentLoaded', function () {
    var filas = document.querySelectorAll('#dataTable tbody tr');

    filas.forEach(function (fila) {
        fila.addEventListener('click', function () {
            // Si la fila ya está seleccionada, deseleccionarla
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
            } else {
                // Si la fila no está seleccionada, deseleccionar otras filas y seleccionar esta
                filas.forEach(function (otraFila) {
                    if (otraFila !== fila) {
                        otraFila.classList.remove('selected');
                    }
                });

                this.classList.add('selected');

                // Obtener los datos de la fila clicada
                var celdas = this.getElementsByTagName('td');
                var id = celdas[0].textContent;
               

                // Realizar acciones con los datos obtenidos
               
                console.log('Id:', id);
            }
        });
    });
});