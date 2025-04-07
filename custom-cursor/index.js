let cont = document.querySelector("#container")
let cursor = document.querySelector("#container .cursor")

cont.addEventListener("mousemove",(shivam)=>{
    cursor.style.left = shivam.x+"px"
    cursor.style.top = shivam.y+"px"
})