function sendForm() {
    const body = document.querySelector("body");
    const form = document.querySelector("#form-servis");
    form.addEventListener("submit", formSend);

    async function formSend(event) {
        event.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            form.parentElement.classList.add("_sending");
            body.classList.add("hidden");

            let response = await fetch("sendmail.php", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.parentElement.classList.remove("_sending");
                body.classList.remove("hidden");
            } else {
                alert("Error");
                form.parentElement.classList.remove("_sending");
                body.classList.remove("hidden");
            }
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll("._req");

        formReq.forEach(elem => {
            formRemoveError(elem);

            if (elem.classList.contains("_email")) {
                if (emailTest(elem)) {
                    formAddError(elem);
                    error++;
                }
            } else if (elem.getAttribute("type") === "checkbox" && elem.checked === false) {
                formAddError(elem);
                error++;
            } else if (elem.getAttribute("id") === "country" && elem.value === "-") {
                formAddError(elem);
                error++;
            } else {
                if (elem.value === "") {
                    formAddError(elem);
                    error++;
                }
            }
        })

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
}

export default sendForm;