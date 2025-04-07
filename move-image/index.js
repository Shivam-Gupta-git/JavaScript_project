let box = document.querySelectorAll(".box")
box.forEach((shivam)=>{
  shivam.addEventListener("mouseenter",()=>{
    shivam.childNodes[3].style.opacity = 1
  })
  shivam.addEventListener("mouseleave",()=>{
    shivam.childNodes[3].style.opacity = 0
  })
  shivam.addEventListener("mousemove",(dets)=>{
    shivam.childNodes[3].style.left = dets.x+"px"
    shivam.childNodes[3].style.top = dets.y+"px"
})
})