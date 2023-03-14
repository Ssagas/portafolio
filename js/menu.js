var menu = document.querySelector(".links__menu");
var back_menu = document.querySelector(".back__menu");

export function mostrar_menu(){
    
    console.log("entro");
    menu.classList.add("active");
    back_menu.style.display ="block";
       
}

export function ocultar_menu(){
   
   menu.classList.remove("active");
   back_menu.style.display="none";
}


