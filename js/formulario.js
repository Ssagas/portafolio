const input = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"')


export function autocomplete (item){ //esta función hace que no se guarden datos aun estando la opcion del navegador de autocompletado
    item.setAttibute("autocomplete", "off");
};

