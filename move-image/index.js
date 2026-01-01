const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    const img = box.querySelector("img");


    const bg = box.getAttribute("data-bg");
    box.style.setProperty('--bg-image', `url(${bg})`);
    box.style.backgroundImage = `url(${bg})`; 

    box.addEventListener("mouseenter", () => {
        img.style.opacity = "1";
        box.style.backgroundImage = `url(${bg})`;
        box.classList.add('bg-visible');
    });

    box.addEventListener("mouseleave", () => {
        img.style.opacity = "0";
        box.style.backgroundImage = '';
        box.classList.remove('bg-visible');
    });

    box.addEventListener("mousemove", (e) => {
        img.style.left = e.clientX + "px";
        img.style.top = e.clientY + "px";
    });
});