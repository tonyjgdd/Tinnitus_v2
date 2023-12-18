
document.getElementById('drop-area').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('drop-area').addEventListener('dragover', function (e) {
    e.preventDefault();
    this.classList.add('border-primary');
});

document.getElementById('drop-area').addEventListener('dragleave', function () {
    this.classList.remove('border-primary');
});

document.getElementById('drop-area').addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('border-primary');

    var files = e.dataTransfer.files;
    handleFiles(files);
});

document.getElementById('fileInput').addEventListener('change', function () {
    var files = this.files;
    handleFiles(files);
});

function handleFiles(files) {
    var preview = document.getElementById('preview');
    preview.innerHTML = '';

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file.type.match('image.*')) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var img = document.createElement('img');
                img.src = e.target.result;
                preview.appendChild(img);
            };

            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecciona solo archivos de imagen.');
        }
    }
}
