function navMenu() {
    const body = document.querySelector("body");
    const navbarBnt = document.querySelectorAll(".navbar-btn")
    const navbar = document.querySelector(".main-nav");

    navbarBnt.forEach(elem => {
        elem.addEventListener("click", () => {
            if (!navbar.classList.contains("open") && !body.classList.contains("hidden")) {
                navbar.classList.add("open");
                body.classList.add("hidden");
            } else {
                navbar.classList.remove("open");
                body.classList.remove("hidden");
            }
        })
    })
}

export default navMenu;