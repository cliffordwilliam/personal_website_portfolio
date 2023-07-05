const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-menu')

burger.addEventListener('click', function(){
    if (menu.classList.contains('show')) {
        menu.classList.toggle('full-height')
    } else {
        menu.classList.toggle('show');
        requestAnimationFrame(function(){
            menu.classList.toggle('full-height')
        });
    }
})

menu.addEventListener('transitionend', function(event){
    if (event.target === menu && menu.classList.contains('full-height') === false) {
        menu.classList.toggle('show');
    }
});