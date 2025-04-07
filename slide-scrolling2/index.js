let image_box = document.querySelectorAll('#main-container .box1');
let pre = document.querySelector('.pre');
let next = document.querySelector('.next');

count = 0
image_box.forEach(function (image_box, index) {
    image_box.style.left = `${index * 100}%`
    // console.log(image_box, index)
})
next.addEventListener('click', () => {
    count++;
    if (count == image_box.length) {
        count = 0;
    }
    myfun();
    changeColor();
})

pre.addEventListener('click', () => {
    count--;
    if (count == -1) {
        count = image_box.length - 1;
    }
    myfun();
    changeColor();
})

function myfun() {
    image_box.forEach((image) => {
        image.style.transform = `translateX(-${count * 100}%)`
    })
}


let buttons_container = document.querySelector('.button-box');
for (let i = 0; i < image_box.length; i++) {
    let div = document.createElement('div');
    div.className = 'button';
    buttons_container.appendChild(div);
}
let buttons = document.querySelectorAll('.button');
//  console.log(buttons)
buttons[0].style.backgroundColor = 'gray'
buttons.forEach(function (button, index) {
    // console.log(button, index);
    button.addEventListener('click', () => {
        buttonColor();
        count = index;
        button.style.backgroundColor = 'gray'
        myfun()
    })
});

let buttonColor = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent'
    })
}
let changeColor = () => {
    buttonColor();
    buttons[count].style.backgroundColor = 'gray'
}


setInterval(() => {
    count++;
    if (count == image_box.length) {
        count = 0;
    }
    buttons[0].style.backgroundColor = 'gray'
    buttonColor();
    myfun();
    changeColor();
}, 5000)

