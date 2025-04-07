let text1 = document.querySelector("h2")
let btn = document.querySelector(".add")
let cont = document.querySelector("#container")
let cursor = document.querySelector(".cursor")

let flag = 0
btn.addEventListener("click",()=>{
    if(flag == 0){
        text1.innerHTML = "Friend"
        text1.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    }
     else{
        text1.innerHTML = "Stranger"
        text1.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
 
     }
})
cont.addEventListener("mousemove",(shivam)=>{
    cursor.style.left = shivam.x+"px"
    cursor.style.top = shivam.y+"px"
})

