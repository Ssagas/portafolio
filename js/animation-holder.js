export function onBlurInput(input) {
    input.value = input.value.trim(); //quita los espacios en blanco, por si solo dieron espacio espacio, no lo toma como dato
    if (input.value.trim().length == 0) {
        input.previousElementSibling.classList.remove('top');
    }
    input.previousElementSibling.classList.remove('focus');
    input.parentNode.classList.remove('focus');
}

export function onFocusInput(input) {
    input.previousElementSibling.classList.add('top');
    input.previousElementSibling.classList.add('focus');
    input.parentNode.classList.add('focus');
}

export function onFocusText(text) {
    text.previousElementSibling.classList.add('top');
    text.previousElementSibling.classList.add('focus');
    text.parentNode.classList.add('focus');
}

export function onBlurText(text){
    text.value = textarea.value.trim(); //quita los espacios en blanco, por si solo dieron espacio espacio, no lo toma como dato
    if (text.value.trim().length == 0) {
        text.previousElementSibling.classList.remove('top');
    }
    text.previousElementSibling.classList.remove('focus');
    text.parentNode.classList.remove('focus');
}