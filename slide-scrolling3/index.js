let slider = document.querySelectorAll('#items-container .image-box')
count = 0;
slider.forEach(function (slider, index) {
    console.log(slider, index)
    slider.style.left = `${index * 100}%`;
})

function myslider() {
    slider.forEach((image) => {
        image.style.transform = `translateX(-${count * 100}%)`;
    })
}

let buttons_container = document.querySelector('.button-container');
for (let i = 0; i < slider.length; i++) {
    let div = document.createElement('div');
    div.className = 'button';
    buttons_container.appendChild(div);
}

let buttons = document.querySelectorAll('.button');
buttons.forEach((button, index) => {
    buttons[0].style.backgroundColor = 'gray'
    button.addEventListener('click', () => {
        buttonColor();
        count = index;
        button.style.backgroundColor = 'gray';
        myslider();
    })
})

let buttonColor = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent'
    });
}
let changeColor = () => {
    buttonColor();
    buttons[count].style.backgroundColor = 'gray'
}

setInterval(() => {
    count++;
    if (count == slider.length) {
        count = 0;
    }
    buttons[0].style.backgroundColor = 'gray';
    buttonColor();
    changeColor();
    myslider();
}, 5000)



