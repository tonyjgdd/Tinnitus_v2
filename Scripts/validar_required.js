

        document.getElementById('finalizarButton').addEventListener('click', function () {
    var form = document.querySelector('form');
    if (form.checkValidity()) {
        // Si el formulario es válido, muestra el modal
        $('#confirmModal').modal('show');
    } else {
        // Si el formulario no es válido, muestra un mensaje de alerta
        alert('Por favor, completa todos los campos requeridos.');
    }
});


