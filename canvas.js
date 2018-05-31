var canvas;
var context;
var isDrawing = false;
window.onload = function () {
    "use strict";
    canvas = document.getElementById("canvas");
    canvas.width = 350;
    canvas.height = 230;
    context = canvas.getContext("2d");
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
    document.getElementById('submit').onclick = function () {
    alert('Ми вдячні за вашу творчість!');
    location = 'shooting.html';
    };
};
function startDrawing(e) { //початок малюнку
    "use strict";
    isDrawing = true;
    e = e || window.event; //якщо немає підтримки event
    if (!e.pageX) { //якщо немає підтримки pageX
        e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    context.beginPath();
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
function draw(e) {
    "use strict";
    if (isDrawing === true) { 
        e = e || window.event;//для підтримки event
        if (!e.pageX) {
            e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        var x = +e.pageX - (+canvas.offsetLeft);
        var y = +e.pageY - (+canvas.offsetTop);
        context.lineTo(x, y);
        context.stroke();
    }
}
function stopDrawing() {//кінець малюнку
    "use strict";
    isDrawing = false;
}