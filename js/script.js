//-----------SECCIÓN DE IMPORTACIÓN DE LAS FUNCIONES-------
import { onFocusInput, onFocusText, onBlurInput, onBlurText } from './animation-holder.js';
import { ocultar_menu, mostrar_menu } from './menu.js';

//-----------SECCIÓN DE LLAMADOS DEL DOM------------------
const inputs = document.querySelectorAll('input');
const texts = document.querySelectorAll('textarea');
const input = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"')

//-----------DECLARADO DE VARIABLES-----------------------
var boton = document.querySelector("#bars__menu");
var back_menu = document.querySelector(".back__menu");

//----------LLAMADO A EVENTOS ACTIVADO Y DESACTIVADO DEL MENU----------------------------
boton.addEventListener("click", mostrar_menu);
back_menu.addEventListener("click", ocultar_menu);

//-----------ACTIV DEL FORM VISUAL-------------------------------------
inputs.forEach(input => {

    input.onclick = () => {
        onFocusInput(input);

        input.onblur = () => {
            onBlurInput(input);
        };
    };
});


texts.forEach(text => {
    text.onclick = () => {

        onFocusText(text);

        text.onblur = () => {
            onBlurText(text);
        }

    };
});

