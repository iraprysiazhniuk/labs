var pageLoad = function () {
    'use strict';
    var xml = document.getElementById('xml');
    function crXMLHttpRequest() {
        var res = false;
        if (window.XMLHttpRequest) {
            res = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            if (new ActiveXObject('Microsoft.XMLHTTP')) {
                res = new ActiveXObject('Microsoft.XMLHTTP');
            } else if (new ActiveXObject('Msxml2.XMLHTTP')) {
                res = new ActiveXObject('Msxml2.XMLHTTP');
            } else {
                res = false;
                alert('Неможливо відправити запит!');
            }
        }
        return res;
    }
    var json = document.getElementById('json'),
        request3 = crXMLHttpRequest();
    json.onclick = function () {
        request3.open('GET', 'prize.json', false);
        request3.send();
        if (request3.readyState != 4) {
            alert(request3.status + ': ' + request3.statusText);
        } else {
            var i = 0,
                JSONDoc = JSON.parse(request3.responseText),
                table = '<tr>';
            for (name in JSONDoc) {
                table += '<th>' + name + '</th>';
            }
            table += '</tr>';
            for (name in JSONDoc['Місце']) {
                table += '<tr><td>' + JSONDoc['Місце'][name] + '</td><td>' + JSONDoc['Приз'][name] + '</td><tr>';
                i++;
            }
            json.style.visibility = 'hidden';
            document.getElementById('json1').innerHTML = table;
        }
    };
    var request2 = crXMLHttpRequest();
    xml.onclick = function () {
        request2.open('GET', 'films.xml', false);
        request2.send();
        if (request2.readyState != 4) {
            alert(request2.status + ': ' + request2.statusText);
        } else {
            var i,
                xmlDoc = request2.responseXML,
                table = '<tr><th>Назва</th><th>Опис</th><th>Переглянути фільм</th></tr>',
                x = xmlDoc.getElementsByTagName('film');
            for (i = 0; i < x.length; i++) {
                table += '<tr><td>' + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName('description')[0].childNodes[0].nodeValue + '</td><td><a class="ulightbox" href="' + x[i].getElementsByTagName('watch')[0].childNodes[0].nodeValue+'" title="Нажміть на посилання" style="color:beige">Дивитися фільм</a></td></tr>';
            }
            document.getElementById('xml').style.visibility = 'hidden';
            document.getElementById('xmlTable').innerHTML = table;//выводим таблицу
        }
    };
};
if (window.addEventListener) {
    window.addEventListener('load', pageLoad);
} else {
    window.attachEvent('onload', pageLoad);
}
