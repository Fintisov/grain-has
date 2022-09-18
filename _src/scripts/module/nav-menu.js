function navMenu() {
    const body = document.querySelector("body");
    const navbar = document.querySelector(".main-nav");
    const header = document.querySelector(".header");

    function closeMenu() {
        navbar.classList.remove("open");
        body.classList.remove("hidden");
    }

    header.addEventListener("click", (e) => {
        const target = e.target;

        if (target.closest(".navbar-btn") && !body.classList.contains("hidden") && !navbar.classList.contains("open")) {
            navbar.classList.add("open");
            body.classList.add("hidden");
        } else if (target.closest(".navbar-btn") || target.classList.contains("header") ||
            target.closest(".header__logo") || target.closest(".main-nav__list")) {
            closeMenu();
        }
    })
}

export default navMenu;