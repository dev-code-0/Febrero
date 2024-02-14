
const botonMusica = document.getElementById('musicaIcono');
const voiceIcon = document.getElementById('voiceIcon');
const voiceMuteIcon = document.getElementById('voiceMuteIcon');
const audioMusica = document.getElementById('musica');
const oscuro = document.getElementById('oscuro');
const claro = document.getElementById('claro');

voiceIcon.style.display = 'none';
voiceMuteIcon.style.display = 'inline-block';

function reproducirMusica() {
    audioMusica.play();
}

function detenerMusica() {
    audioMusica.pause(); 
    audioMusica.currentTime = 0; 
}
function toggleMusica() {
    if (audioMusica.paused) {
        reproducirMusica();
        voiceIcon.style.display = 'none';
        voiceMuteIcon.style.display = 'inline-block'; 
    } else {
        detenerMusica(); 
        voiceIcon.style.display = 'inline-block';
        voiceMuteIcon.style.display = 'none';
    }
}
botonMusica.addEventListener('click', function() {
    if (voiceIcon.style.display === 'none') {
        voiceIcon.style.display = 'inline-block';
        voiceMuteIcon.style.display = 'none';
        reproducirMusica(); 
    } else {
        voiceIcon.style.display = 'none';
        voiceMuteIcon.style.display = 'inline-block';
        detenerMusica(); 
    }
});

function aplicarTemaClaro() {
    document.body.classList.remove('fondo-oscuro');
    document.body.classList.add('fondo-claro');
    const elementosCambiarColor = document.querySelectorAll('.cambiar-color');
    elementosCambiarColor.forEach(elemento => {
        elemento.style.color = 'black';
    });

    claro.style.display = 'inline';
    oscuro.style.display = 'none';
}

function aplicarTemaOscuro() {
    document.body.classList.remove('fondo-claro');
    document.body.classList.add('fondo-oscuro');
    const elementosCambiarColor = document.querySelectorAll('.cambiar-color');
    elementosCambiarColor.forEach(elemento => {
        elemento.style.color = 'white';
    });

    oscuro.style.display = 'inline';
    claro.style.display = 'none';
}

function alternarTema() {
    const temaOscuroActivo = document.body.classList.contains('fondo-oscuro');
    if (temaOscuroActivo) {
        aplicarTemaClaro();
    } else {
        aplicarTemaOscuro();
    }
}

document.getElementById("themeIcono").addEventListener("click", alternarTema);
aplicarTemaClaro();

 function showContainer() {
    var containerIntro = document.getElementById("container-intro");
    var container = document.getElementById("container");
    containerIntro.style.display = "none";
    container.style.display = "flex";
    startLoadingAnimation(); 
    setTimeout(hideLoadingAnimation, 4000);
}

function startLoadingAnimation() {
    var loadingElement = document.getElementById("loading");
    loadingElement.classList.add("loading-animation");
}

function hideLoadingAnimation() {
    var loadingElement = document.getElementById("loading");
    loadingElement.classList.remove("loading-animation");
}

function hideContainer() {
    var containerIntro = document.getElementById("container-intro");
    var container = document.getElementById("container");
    containerIntro.style.display = "flex";
    container.style.display = "none";
}
function activateMusicIcon() {
    var musicaIcono = document.getElementById('musicaIcono');
    musicaIcono.click();
}
var btnStart = document.getElementById("btn_start");
btnStart.addEventListener("click", function() {
    showContainer();
    activateMusicIcon();
});
var btnHide = document.getElementById("btn_hide");
btnHide.addEventListener("click", hideContainer);




