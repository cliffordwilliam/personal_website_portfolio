const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-menu')

burger.addEventListener('click', function(){
    let state = burgerMenu.classList.toggle('active-burger-menu');
    if (state === true) {
        burger.src = "./assets/images/x-lg.svg";;
    }
    else {burger.src = "./assets/images/list.svg";
    }
})