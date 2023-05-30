const buttons = document.getElementsByTagName('button');

// on button clicked
for (let index = 0; index < buttons.length; index++) {
    let button = buttons[index];
    button.addEventListener('click', function(event){
        // ripple effect
        const clickedButton = event.currentTarget;

        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
        circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
        circle.classList.add('ripple');
      
        button.appendChild(circle);

        circle.addEventListener('animationend', function(){
            circle.remove();
        })
    })
}