

let tl = gsap.timeline()
tl.from("#container2 .box1 .text1", {
    y: 30,
    opacity: 1,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#container2",
        scroller: "body",
        //  markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1
    }
})
tl.from("#container2 .box1 .text2", {
    y: -30,
    opacity: 1,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#container2",
        scroller: "body",
        //  markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1
    }
})
tl.from("#container2 .box1 .text3", {
    y: 30,
    opacity: 1,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#container2",
        scroller: "body",
        //  markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1
    }
})
tl.from("#container2 .box1 .text4", {
    y: -30,
    opacity: 1,
    duration: 2,
    delay: 0.5,
    scrollTrigger: {
        trigger: "#container2",
        scroller: "body",
        //  markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1
    }
})

tl.from(" #container3 .box1, #container3 .box3", {
    y: -500,
    opacity: 1,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: "#container3 ",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 40%",
        scrub: 1

    }
})
tl.from(" #container3 .box2, #container3 .box4", {
    y: 500,
    opacity: 1,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: "#container3 ",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 40%",
        scrub: 1

    }
})

tl.from("#container6", {
    x: -500,
    opacity: 0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: "#container6",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 60%",
        scrub: 1
    }
})
tl.from("#container6 img", {
    y: 400,
    duration: 4,
    delay: 3,
    rotate: 120,
    scrollTrigger: {
        trigger: "#container6",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
        rotate: 60
    }
})

tl.from("#container7", {
    x: 500,
    opacity: 0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: "#container7",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 60%",
        scrub: 1
    }
})
tl.from("#container7 img", {
    y: -400,
    duration: 4,
    delay: 3,
    scrollTrigger: {
        trigger: "#container7",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
        rotate: 60
    }
})
tl.from("#container8", {
    x: -500,
    opacity: 0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: "#container8",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 60%",
        scrub: 1
    }
})
tl.from("#container8 img", {
    scale: 0.5,
    opacity: 0,
    duration: 4,
    delay: 3,
    scrollTrigger: {
        trigger: "#container8",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
        rotate: 60
    }
})
tl.from("#container9", {
    x: 500,
    opacity: 0,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: "#container9",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 60%",
        scrub: 1
    }
})
tl.from("#container9 img", {
    y: -400,
    duration: 4,
    delay: 3,
    rotate: -120,
    scrollTrigger: {
        trigger: "#container9",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
        rotate: 60
    }
})
tl.from("#container10 .box1a", {
    x: 150,
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 1,
    rotate: 10,
    scrollTrigger: {
        trigger: "#container10",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 25%",
        scrub: 1,
    }
})
tl.from("#container10 .box1b", {
    x: -150,
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 1,
    rotate: -10,
    scrollTrigger: {
        trigger: "#container10",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 25%",
        scrub: 1,
    }
})
tl.from("#container10 .box3a", {
    x: 150,
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    rotate: -10,
    scrollTrigger: {
        trigger: "#container10",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 25%",
        scrub: 1,
    }
})
tl.from("#container10 .box3b", {
    x: -150,
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    rotate: 10,
    scrollTrigger: {
        trigger: "#container10",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 25%",
        scrub: 1,
    }
})
tl.from("#container10 .words1", {
    y: 170,
    // duration:1,
    // delay:1,
    scrollTrigger: {
        trigger: "#container10",
        scroller: "body",
        //  markers:true,
        start: "top 60%",
        end: "top 30%",
        scrub: 1
    }
})
tl.from("#container10 .words2", {
    y: 170,
    // duration:0.5,
    // delay:1,
    scrollTrigger: {
        trigger: "#container10",
        scroller: "body",
        //  markers:true,
        start: "top 55%",
        end: "top 25%",
        scrub: 1
    }
})
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#container6"),
//     smooth:true,
// });

// JavaScript................

let slide = document.querySelectorAll("#main-container .box1")

let count = 0;
slide.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`

})
function next() {
    count++;
    if (count == slide.length) {
        count = 0
    }
    myFun()
}
function pre() {
    count--;
    if (count == -1) {
        count = slide.length - 1
    }
    myFun()
}

function myFun() {
    slide.forEach((image) => {
        image.style.transform = `translateX(-${count * 100}%)`
    })

}
setInterval(() => {
    count++;
    if (count == slide.length) {
        count = 0
    }
    myFun()
}, 10000)

let container1 = document.querySelector("#main-container")
let dought1 = document.querySelector(".dought1")
container1.addEventListener("mousemove", (shivam) => {

    dought1.style.left = shivam.x + "px"
    dought1.style.top = shivam.y + "px"
})
container1.addEventListener("mouseenter", () => {
    dought1.style.opacity = 1
})
container1.addEventListener("mouseleave", () => {
    dought1.style.opacity = 0
})




let box1 = document.querySelector("container14 .box1")
let a = document.querySelector("#container14 .main-box");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

a.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    a.scrollLeft += evt.deltaY;
    a.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
    a.style.scrollBehavior = "smooth";
    a.scrollLeft += 225;
});
backbtn.addEventListener("click", () => {
    a.style.scrollBehavior = "smooth";
    a.scrollLeft -= 235;
});
