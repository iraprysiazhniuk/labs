"use strict";
var sp = 0.2;
var images;
var img_count = 0;
var cont = true;//при натисканні користувача змінюється, щоб призупинити анімацію
function print_on_canvas(canv, contxt) { //друкуємо текст поверх анімації
    "use strict";
    contxt.font = 'italic 15pt Arial';
    contxt.fillStyle = 'white';
}
function draw_welcome(){
    "use strict";
    var welcome = document.getElementById('canvas');
    var welcomecontext = welcome.getContext('2d');
    welcomecontext.drawImage(images[Math.floor(img_count/4)], 0, 0);//малюємо рисунок
    img_count = Math.floor((img_count + 1) % 68);
    print_on_canvas(welcome, welcomecontext);//друкуємо текст
    if (cont) {
        requestAnimationFrame(draw_welcome);
    }
}
if(window.addEventListener){ //для ІЕ
    window.addEventListener('load', winload);
}
else{
    window.attachEvent('onload', winload);
}
function winload() {
    "use strict";
    if (document.all) { //ІЕ10- не має підтримки drawImage
        document.getElementById('Canvas').innerHTML = '<p id="error">Ваш браузер не може відобразити анімацію. Вибачте за незручність.</p>';
        return;
    }
    images = new Array(17); // масив картинок для анімації
    for (var i = 0; i < images.length; ++i) {
        images[i] = new Image();
        images[i].src = "shooting/gif/" + i + ".gif";
    }
    draw_welcome();
    window.onresize = function () { //масштабування анімації
        if (window.innerWidth >= 450 && window.innerWidth <= 600) {
            document.getElementById('canvas').width = window.innerWidth - 30;
            document.getElementById('canvas').height = 150;
        }
        else {document.getElementById('canvas').height = 222;}
        print_on_canvas(document.getElementById('canvas'), document.getElementById('canvas').getContext('2d'));
    };
    //задання розмірів при запуску
    document.getElementById('canvas').width = window.innerWidth >= 450 && window.innerWidth <= 600 ? window.innerWidth - 30 : 500;
    document.getElementById('canvas').height = window.innerWidth >= 450 && window.innerWidth <= 600 ? 150 : 222;
    document.getElementById('canvas').onclick = function() {
        if (cont) {
            cont = false;
        }
        else {
            cont = true;
            draw_welcome();
        }
    }
}