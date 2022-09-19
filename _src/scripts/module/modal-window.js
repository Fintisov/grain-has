function modal(modalName) {
    const modal = document.querySelector(`#${modalName}`);
    const openModalBtn = document.querySelector(`[data-modal = ${modalName}]`);
    const body = document.querySelector("body");

    openModalBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (!modal.classList.contains("show") && !body.classList.contains("hidden")) {
            modal.classList.add("show");
            body.classList.add("hidden");
        }
    })

    modal.addEventListener("click", (e) => {
        e.preventDefault();


        if (e.target.closest(".modal__btn") || e.target.classList.contains("modal") &&
            modal.classList.contains("show") && body.classList.contains("hidden")) {
            modal.classList.remove("show");
            body.classList.remove("hidden");
        }
    })
}

export default modal;