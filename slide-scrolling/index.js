let a = document.querySelector(".container");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

a.addEventListener("wheel",(evt) => {
 evt.preventDefault();
 a.scrollLeft += evt.deltaY;
 a.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click",() =>{
    a.style.scrollBehavior = "smooth";
    a.scrollLeft += 670;
});
backbtn.addEventListener("click",() =>{
    a.style.scrollBehavior = "smooth";
    a.scrollLeft -= 670;
});