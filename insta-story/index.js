let arr = [
    {
        dp:"model1.jpg",story:"model1a.jpg",
    }
]
let box = document.querySelector(".box1")
let clutter = ""
arr.forEach((shivam,idx)=>{
 clutter += `<div class="circle">
 <img id="${idx}" src="${shivam.dp}" alt="">
</div>`
})
box.innerHTML = clutter

box.addEventListener("click",(dets)=>{
  document.querySelector("#full-screen").style.display = "block"

  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`


  setTimeout(()=>{
    document.querySelector("#full-screen").style.display = "none"
  },3000)
});

