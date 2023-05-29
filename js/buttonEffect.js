const buttons = document.getElementsByTagName('button');

for (let index = 0; index < buttons.length; index++) {
    let button = buttons[index];
    button.addEventListener('click', function(event){
        const clickedButton = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
        circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }
      
        button.appendChild(circle);
    })
}