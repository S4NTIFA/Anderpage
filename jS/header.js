document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
