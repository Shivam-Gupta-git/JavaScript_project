gsap.from("#navbar ul li",{
    opacity:0,
    y:-30,
    duration:1,
    delay:1,
    stagger:0.5
})
let tl= gsap.timeline()

tl.from("#container1 .box1a h1",{
    opacity:0,
    x:-400,
    duration:2,
    delay:1,
})
tl.from("#container1 .box1b p",{
    opacity:0,
    y:8,
    duration:1,
    stagger:0.5
})
tl.from("#container1 .box1c .btn1, .btn2",{
    y:10,
    scale:0.2,
    opacity:0,
    duration:1,
})
tl.from("#container1 .box1c p",{
    x:-10,
      stagger:0.5,
    opacity:0,
    duration:1,
})
tl.to("#container2 .box1",{
    x:200,
    duration:1,
    delay:1,
    yoyo:true,
    scrollTrigger:{
        trigger:"#container2 .box1",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1,
        }
       
    }
)
tl.to("#container2 .box3",{
    x:-200,
    duration:1,
    delay:1,
    yoyo:true,
    scrollTrigger:{
        trigger:"#container2 .box3",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1,
    }
})

tl.to("#container3 .box1aa",{
    y:-40,
    duration:1,
    delay:1,
    yoyo:true,
    scrollTrigger:{
        trigger:"#container3 .box1aa",
        scroller:"body",
        start:"top 40%",
        end:"top 15%",
        scrub:1,
       
    }
})
tl.to("#container3 .box1ab",{
    x:40,
    duration:1,
    delay:1,
    yoyo:true,
    scrollTrigger:{
        trigger:"#container3 .box1ab",
        scroller:"body",
        start:"top 30%",
        end:"top 10%",
        scrub:1
    }
})
tl.to("#container3 .box1ad",{
    x:-40,
    duration:1,
    delay:1,
    yoyo:true,
    scrollTrigger:{
        trigger:"#container3 .box1ad",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        scrub:1,
    }
})
tl.to("#container3 .box1ae",{
    y:40,
    duration:1,
    delay:1,
    yoyo:true,
    scrollTrigger:{
        trigger:"#container3 .box1ae",
        scroller:"body",
        start:"top 60%",
        end:"top 40%",
        scrub:1
    }
})
tl.from("#container3 .box2aa1,#container3 .box2aa2,#container3 .box2aa3",{
   y:-20,
    opacity:0,
    duration:0.5,
    delay:0.5,
    scrollTrigger:{
     trigger:"#container3 .box2aa1",
     scroller:"body",
     start:"top 70%",
     end:"top 10%",
     scrub:1,
    
    }
})
tl.from("#container3 .box2ab",{
    x:-25,
    delay:2,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#container3 .box2ab",
        scroller:"body",
        start:"top 60%",
        end:"top 20%",
        scrub:1,
    }
})
tl.from("#container4 p",{
    y:20,
    duration:1,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#container4 p",
        scroller:"body",
        start:"top 80%",
        end:"top 40%",
        scrub:1,
    }
   
})
tl.from(".main-box",{
    y:-30,
    opacity:0,
    // duration:1,
    // delay:1,
    scrollTrigger:{
        trigger:"#container4 p",
        scroller:"body",
        start:"top 50%",
        end:"top 25%",
        scrub:0.5,

    }
})
tl.from("#container5 .back, #container5 .next",{
    y:10,
    scale:0.2,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#container4 p",
        scroller:"body",
        start:"top 50%",
        end:"top 25%",
        scrub:0.5,

    }
})

tl.from("#container6 p",{
    y:10,
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:"#container6 p",
        scroller:"body",
        start:"top 65%",
        end:"top 30%",
        scrub:0.5,
    }
})
tl.from("#main-container",{
    y:40,
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:"#main-container",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1,
    }
})
// 

// JavaScript
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
