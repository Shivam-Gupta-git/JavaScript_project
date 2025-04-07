let home = document.querySelector("#navbar .font1 a")
let about = document.querySelector("#navbar .font2 a")
let service = document.querySelector("#navbar .font3 a")
let portfilio = document.querySelector("#navbar .font4 a")
let contact = document.querySelector("#navbar .font5 a")
let about_box = document.querySelector("#navbar .about-box")
let toggle = document.querySelector("#main-container1  .toggle")
let body = document.querySelector("body")
let font3 = document.querySelector("#main-container1 .font3")
let font4 = document.querySelector("#main-container1 .font4")
let font5 = document.querySelector("#main-container1 .font5")
let font6 = document.querySelector("#main-container1 .font6")
let font7 = document.querySelector("#main-container1 .font7")
let multi_color = document.querySelector("#main-container1 .multi-color")
let slide_bar = document.querySelector("#main-container1 .slide-bar")
let btn1 = document.querySelector("#main-container1 .btn1")
let btn2 = document.querySelector("#main-container1 .btn2")
let btn3 = document.querySelector("#main-container1 .btn3")
let btn4 = document.querySelector("#main-container1 .btn4")
let btn5 = document.querySelector("#main-container1 .btn5")
let button1 = document.querySelector("#main-container1 .button1")


let num = 0;
toggle.addEventListener("click",()=>{
    if(num == 0){
        body.style.backgroundColor = "black"
        font3.style.color = "white"
        font7.style.color = "white"
        font5.style.color = "white"
        toggle.style.borderColor = "white"
        multi_color.style.borderColor = "white"
        num = 1;
        console.log("Check")

    }else{
        body.style.backgroundColor = "white" 
        font3.style.color = "black"
        font5.style.color = "black"
        font7.style.color = "black"
        toggle.style.borderColor = "black"
        multi_color.style.borderColor = "black"
        num = 0;
        console.log("Check")
    }
})

let num2 = 0;
multi_color.addEventListener("click",()=>{
  if(num2 == 0){
    slide_bar.style.right = `${-25}px`
    num2 = 1;
  }else{
    slide_bar.style.right = `${25}px`
    num2 = 0;
  }
})


btn1.addEventListener("click",()=>{
//    font1.style.color = "rgb(4, 246, 246)"
   font4.style.color = "rgb(4, 246, 246)"
   font6.style.color = "rgb(4, 246, 246)"
   button1.style.backgroundColor = "rgb(4, 246, 246)"
})
btn2.addEventListener("click",()=>{
   font4.style.color = "rgb(11, 106, 135)"
   font6.style.color = "rgb(11, 106, 135)"
   button1.style.backgroundColor = "rgb(11, 106, 135)"
})
btn3.addEventListener("click",()=>{
   font4.style.color = "rgb(132, 73, 242)"
   font6.style.color = "rgb(132, 73, 242)"
   button1.style.backgroundColor = "rgb(132, 73, 242)"
})
btn4.addEventListener("click",()=>{
   font4.style.color = "rgb(9, 202, 138)"
   font6.style.color = "rgb(9, 202, 138)"
   button1.style.backgroundColor = "rgb(9, 202, 138)"
})
btn5.addEventListener("click",()=>{
   font4.style.color = "rgb(255, 106, 0)"
   font6.style.color = "rgb(255, 106, 0)"
   button1.style.backgroundColor = "rgb(255, 106, 0)"
})


let num3 = 0;
about.addEventListener("click",()=>{
    if(num3 == 0){
        about_box.style.left = `${100}%`
        num3 = 1;
    }else{
        about_box.style.left = `${0}%`
        num3 = 0;
    }
})