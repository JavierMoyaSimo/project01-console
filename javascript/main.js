var button = document.getElementById('on');
var screen = document.getElementById('final-screen');
var light = document.getElementById('greenlight');
var contador = 0;

var select = document.getElementById('off');
var contadortwo = 0;

// Función para encender la consola al pulsar Start
//Introduzco un gift en la pantalla + Luz verde 
function change() {
    if( contador == 0) {
        screen.style.backgroundImage='url(./images/gif.gif)';
        light.style.background='rgb(15,159,15)'
        contador = 1;
    } else if( contador == 1) {
        screen.style.backgroundImage='linear-gradient(to top right, rgb(27, 26, 26), grey);'
        contador = 0;
    }
}

//Función para apagar la consola al pulsar Select
//La pantalla vuelve a su estado inicial + Luz vuelve a su estado inicial
function tooff() {
    if( contador == 1) {
        screen.style.backgroundImage='url(./images/Captura.PNG)'
        light.style.background='linear-gradient(to bottom, rgb(134, 130, 130), rgb(175, 165, 165))'; 
        contador = 0;
    }
}

// Evento click para el boton Start con Id('on')
button.addEventListener('click', change);

//Evento click para el boton Select con id('off')
select.addEventListener('click', tooff);

