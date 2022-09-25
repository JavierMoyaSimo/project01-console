var button = document.getElementById('on');
var screen = document.getElementById('final-screen');
var light = document.getElementById('greenlight');
var contador = 0;


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


button.addEventListener('click', change);


