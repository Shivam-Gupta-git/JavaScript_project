const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});

let toggle = document.querySelector(".navbar .box1")
let body = document.querySelector("body")
let text1 = document.querySelector(".hero .text1")
let text2 = document.querySelector(".hero .text2")
let text3 = document.querySelector(".hero .text3")
let text4 = document.querySelector(".hero .text4")
let text5 = document.querySelector(".hero .text5")
let color = document.querySelector(".logo .box2")
let color_box = document.querySelector(".logo .color-box")
let color_panel1 = document.querySelector(".logo .color-panel1")
let color_panel2 = document.querySelector(".logo .color-panel2")
let color_panel3 = document.querySelector(".logo .color-panel3")
let color_panel4 = document.querySelector(".logo .color-panel4")
let color_panel5 = document.querySelector(".logo .color-panel5")
let picture_background1 = document.querySelector(".hero .picture-background1")
let btn_common_btn = document.querySelector(".hero .btn-common-btn")
let btn_ghost_btn = document.querySelector(".hero .btn-ghost-btn")
let my_heading = document.querySelector(".portfolio .my-heading")
let about_me = document.querySelector(".about-me")
let text6 = document.querySelector(".text6")
let text7 = document.querySelector(".text7")
let text8 = document.querySelector(".text8")
let text9 = document.querySelector(".text9")
let text10 = document.querySelector(".text10")
let text11 = document.querySelector(".text11")
let text12 = document.querySelector(".text12")
let text13 = document.querySelector(".text13")
let text14 = document.querySelector(".text14")
let text15 = document.querySelector(".text15")
let text16 = document.querySelector(".text16")
let text17 = document.querySelector(".text17")
let text18 = document.querySelector(".text18")
let text19 = document.querySelector(".text19")
let text20 = document.querySelector(".text20")
let text21 = document.querySelector(".text21")
let text22 = document.querySelector(".text22 a")
let text23 = document.querySelector(".text23")
let text24 = document.querySelector(".text24 a")
let text25 = document.querySelector(".text25")
let text26 = document.querySelector(".text26")
let text27 = document.querySelector(".text27")
let my_heading1 = document.querySelector(".services .my-heading")
let my_heading2 = document.querySelector(".contact .my-heading")
let cv = document.querySelector(".cv")
let hire_me = document.querySelector(".hire-me")

let num1 = 0;
toggle.addEventListener("click",()=>{
    if(num1 == 0){
        body.style.backgroundColor = "black"
        text1.style.color = "white"
        text3.style.color = "white"
        text5.style.color = "white"
        my_heading.style.color = "white"
        about_me.style.color = "white"
        text6.style.color = "white"
        text8.style.color = "white"
        text9.style.color = "white"
        text10.style.color = "white"
        text11.style.color = "white"
        text12.style.color = "white"
        text13.style.color = "white"
        text14.style.color = "white"
        text15.style.color = "white"
        text16.style.color = "white"
        text17.style.color = "white"
        text18.style.color = "white"
        text19.style.color = "white"
        text20.style.color = "white"
        text21.style.color = "white"
        text22.style.color = "white"
        text23.style.color = "white"
        text24.style.color = "white"
        text25.style.color = "white"
        text26.style.color = "white"
        text27.style.color = "white"
        my_heading1.style.color = "white"
        my_heading2.style.color = "white"
        num1 = 1;
    }
    else{
        body.style.backgroundColor = "white"
        text1.style.color = "black"
        text3.style.color = "black"
        text5.style.color = "black"
        my_heading.style.color = "black"
        about_me.style.color = "black"
        text6.style.color = "black"
        text8.style.color = "black"
        text9.style.color = "black"
        text10.style.color = "black"
        text11.style.color = "black"
        text12.style.color = "black"
        text13.style.color = "black"
        text14.style.color = "black"
        text15.style.color = "black"
        text16.style.color = "black"
        text17.style.color = "black"
        text18.style.color = "black"
        text19.style.color = "black"
        text20.style.color = "black"
        text21.style.color = "black"
        text22.style.color = "black"
        text23.style.color = "black"
        text24.style.color = "black"
        text25.style.color = "black"
        text26.style.color = "black"
        text27.style.color = "black"
        my_heading1.style.color = "black"
        my_heading2.style.color = "black"
        num1 = 0;
    }
})

let num2 = 0;
color.addEventListener("click",()=>{
    if(num2 == 0){
        color_box.style.marginTop = `${-100}px`
        num2 = 1;
    }else{
        color_box.style.marginTop = `${0}px`
        num2 = 0;
    }
})

color_panel1.addEventListener("click",()=>{
    picture_background1.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"
    text2.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"
    text2.style.backgroundClip = "text"
    text2.style.webkitBackgroundClip = "text"
    text2.style.webkitTextFillColor = "transparent"
    text4.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"
    text4.style.backgroundClip = "text"
    text4.style.webkitBackgroundClip = "text"
    text4.style.webkitTextFillColor = "transparent"
    text7.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"
    text7.style.backgroundClip = "text"
    text7.style.webkitBackgroundClip = "text"
    text7.style.webkitTextFillColor = "transparent"
    btn_common_btn.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"
    btn_ghost_btn.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"
    cv.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"
    hire_me.style.background = "linear-gradient(rgb(79, 72, 70), rgb(173, 231, 234)"

})
color_panel2.addEventListener("click",()=>{
    picture_background1.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"
     text2.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"
     text2.style.backgroundClip = "text"
     text2.style.webkitBackgroundClip = "text"
     text2.style.webkitTextFillColor = "transparent"
     text4.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"
     text4.style.backgroundClip = "text"
     text4.style.webkitBackgroundClip = "text"
     text4.style.webkitTextFillColor = "transparent"

     text7.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"
     text7.style.backgroundClip = "text"
     text7.style.webkitBackgroundClip = "text"
     text7.style.webkitTextFillColor = "transparent"
     btn_common_btn.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"
     btn_ghost_btn.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"
     cv.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"
     hire_me.style.background = " linear-gradient(rgb(239, 208, 71), rgb(207, 130, 239)"


})
color_panel3.addEventListener("click",()=>{
    picture_background1.style.background = "  linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239)"
    text2.style.background = "  linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239)"
    text2.style.backgroundClip = "text"
    text2.style.webkitBackgroundClip = "text"
    text2.style.webkitTextFillColor = "transparent"
    text4.style.background = " linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239) "
    text4.style.backgroundClip = "text"
    text4.style.webkitBackgroundClip = "text"
    text4.style.webkitTextFillColor = "transparent"

    text7.style.background = " linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239) "
    text7.style.backgroundClip = "text"
    text7.style.webkitBackgroundClip = "text"
    text7.style.webkitTextFillColor = "transparent"

    btn_common_btn.style.background = " linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239) "
    btn_ghost_btn.style.background = " linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239) "
    cv.style.background = " linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239) "
    hire_me.style.background = " linear-gradient(rgb(113, 71, 239), rgb(207, 130, 239) "

})
color_panel4.addEventListener("click",()=>{
    picture_background1.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150)"
    text2.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150) "
    text2.style.backgroundClip = "text"
    text2.style.webkitBackgroundClip = "text"
    text2.style.webkitTextFillColor = "transparent"
    text4.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150)"
    text4.style.backgroundClip = "text"
    text4.style.webkitBackgroundClip = "text"
    text4.style.webkitTextFillColor = "transparent"

    text7.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150)"
    text7.style.backgroundClip = "text"
    text7.style.webkitBackgroundClip = "text"
    text7.style.webkitTextFillColor = "transparent"

    btn_common_btn.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150)"
    btn_ghost_btn.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150)"
    cv.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150)"
    hire_me.style.background = "  linear-gradient(rgb(71, 71, 239), rgb(152, 150, 150)"

})
color_panel5.addEventListener("click",()=>{
    picture_background1.style.background = "  linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151)"
    text2.style.background = "  linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151) "
    text2.style.backgroundClip = "text"
    text2.style.webkitBackgroundClip = "text"
    text2.style.webkitTextFillColor = "transparent"
    text4.style.background = "linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151) "
    text4.style.backgroundClip = "text"
    text4.style.webkitBackgroundClip = "text"
    text4.style.webkitTextFillColor = "transparent"

    text7.style.background = "linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151) "
    text7.style.backgroundClip = "text"
    text7.style.webkitBackgroundClip = "text"
    text7.style.webkitTextFillColor = "transparent"

    btn_common_btn.style.background = "linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151) "
    btn_ghost_btn.style.background = "linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151) "
    cv.style.background = "linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151) "
    hire_me.style.background = "linear-gradient(rgba(100, 224, 249, 0.83), rgb(9, 92, 151) "
})



let a = document.querySelector("#container5 .main-box");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

a.addEventListener("wheel",(evt) => {
 evt.preventDefault();
 a.scrollLeft += evt.deltaY;
 a.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click",() =>{
    a.style.scrollBehavior = "smooth";
    a.scrollLeft += 225;
});
backbtn.addEventListener("click",() =>{
    a.style.scrollBehavior = "smooth";
    a.scrollLeft -= 235;
});