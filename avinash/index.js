let nav = document.querySelector("ul");
let open = document.querySelector("#open");
let close = document.querySelector("#close");

// Ensure only the open icon is visible at the start
close.style.display = "none";

function toggleMenu() {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        open.style.display = "none"; // Hide open icon
        close.style.display = "block"; // Show close icon
    } else {
        open.style.display = "block"; // Show open icon
        close.style.display = "none"; // Hide close icon
    }
}

// Attach event listeners
open.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);



// let nav = document.querySelector("ul");
// let open = document.querySelector("#open");
// let close = document.querySelector("#close");

// // Function to toggle menu
// function toggleMenu() {
//     nav.classList.toggle("show"); // Add/remove "show" class
//     let isOpen = nav.classList.contains("show");
//     open.style.display = isOpen ? "none" : "block";
//     close.style.display = isOpen ? "block" : "none";
// }

// // Attach event listeners
// open.addEventListener("click", toggleMenu);
// close.addEventListener("click", toggleMenu);