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

        if (file.type.match('image.*') || file.type === 'application/pdf') {
            var reader = new FileReader();

            reader.onload = function (e) {
                if (file.type.match('image.*')) {
                    var img = document.createElement('img');
                    img.src = e.target.result;
                    preview.appendChild(img);
                } else if (file.type === 'application/pdf') {
                    var embed = document.createElement('embed');
                    embed.src = e.target.result;
                    embed.type = 'application/pdf';
                    embed.width = '100%';
                    embed.height = '500px';
                    preview.appendChild(embed);
                }
            };

            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecciona solo archivos de imagen o PDF.');
        }
    }
}
