const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll(".nav a");

toggle.addEventListener("click", () => {

    nav.classList.toggle("active");
    overlay.classList.toggle("active");

    if (nav.classList.contains("active")) {
        toggle.innerHTML = "✕";
    } else {
        toggle.innerHTML = "☰";
    }
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    toggle.innerHTML = "☰";
}

links.forEach(link => {
    link.addEventListener("click", () => {

        links.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

        if (window.innerWidth <= 768) {
            closeMenu();
        }
    });
});

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        overlay.classList.remove("active");
        toggle.innerHTML = "☰";
    }
});