let box1 = document.querySelector(".main-box")
let icon = document.querySelector("i")


box1.addEventListener("dblclick",()=>{
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    icon.style.opacity = "0.8"
    setTimeout(()=>{
        icon.style.opacity = "0"
    },1000)
    setTimeout(()=>{
        icon.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)
})
