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

// Smooth scrolling for navigation links
document.querySelectorAll('#navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation to course cards on scroll
gsap.from("#container5 .box1a, #container5 .box1b, #container5 .box1c, #container5 .box1d, #container5 .box1e, #container5 .box1f", {
    opacity: 0,
    scale: 0.8,
    y: 50,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#container5",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 1
    }
});

// Add animation to footer
gsap.from("#container8 .footer-section", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#container8",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1
    }
});

// Add interactive hover effect to buttons
document.querySelectorAll('.btn1, .btn2').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Add click interaction to course cards
document.querySelectorAll('#container5 .box1a, #container5 .box1b, #container5 .box1c, #container5 .box1d, #container5 .box1e, #container5 .box1f').forEach(card => {
    card.addEventListener('click', function() {
        // Add a pulse animation on click
        gsap.to(this, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    });
});

// Add counter animation for stats in container2
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target >= 1000000 ? '+' : target >= 50 ? '+' : '+');
            clearInterval(timer);
        } else {
            const value = Math.floor(current);
            element.textContent = value + (target >= 1000000 ? '+' : target >= 50 ? '+' : '+');
        }
    }, 30);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const h1 = entry.target.querySelector('h1');
            const text = h1.textContent;
            const number = parseInt(text.replace(/[^0-9]/g, ''));
            if (number && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                h1.textContent = '0+';
                setTimeout(() => animateCounter(h1, number), 100);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('#container2 .box1, #container2 .box2, #container2 .box3').forEach(box => {
    statsObserver.observe(box);
});

// Add parallax effect to container1 image
gsap.to("#container1 .box2 img", {
    y: -50,
    scrollTrigger: {
        trigger: "#container1",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});
