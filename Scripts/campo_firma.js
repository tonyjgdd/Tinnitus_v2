

var canvas = document.getElementById('campo-firma');
var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'transparent', // Fondo transparente
    penColor: 'blue',
});

// Configura la imagen de fondo
var backgroundImage = new Image();
backgroundImage.src = 'img/audiometria.png' // Cambia esto a la ruta correcta de tu imagen de fondo
backgroundImage.onload = function () {
    canvas.getContext('2d').drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

var botonBorrar = document.getElementById('borrarCanvas');
botonBorrar.addEventListener('click', function () {
    signaturePad.clear();
    canvas.getContext('2d').drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
});

