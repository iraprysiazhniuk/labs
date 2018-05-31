function load() {
    'use strict';

    document.getElementById('file').addEventListener('change', check, false);
}
function check(e) {
    'use strict';
    var fileType = this.files[0].type;
    if (fileType.indexOf('audio') != -1) {
        loadFile(this.files[0], sound);
    } else {
        alert('Ви помилилися, спробуйте ще раз.')
    }
}
function loadFile(file, loaded)
{
    var reader = new FileReader();
    reader.onload = loaded;
    reader.readAsDataURL(file);
}

function sound(evt)
{
    document.getElementById('audio').src = evt.target.result;
}

if (window.addEventListener) {
    window.addEventListener('load', load);
} else {
    window.attachEvent('onload', load);
}
