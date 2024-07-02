
const buttons = document.querySelectorAll(".click-btn, .click-btn-ii");
const success = document.querySelector("section");
const main = document.querySelector("main");
const input = document.querySelector("#email");
let error = document.querySelector(".invalid");


buttons.forEach(button => {
    button.addEventListener("click", function handleSubmit(e) {
        e.preventDefault(e)


        if (input.value === '') {
            error.style.display = 'block';
            input.style.borderColor = 'red';
            input.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        } else {
            error.style.display = 'none';
            input.style.borderColor = 'grey';
            input.style.backgroundColor = 'inherit';
        }

        
        if (!input.value.includes('@') ||
            !input.value.includes('.com')) {
            error.style.display = 'block';
            input.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            input.style.borderColor = 'red';
            return false
        } else {
            error.style.display = 'none';
            input.style.backgroundColor = 'inherit';
            input.style.borderColor = 'grey';
        }


        if (main.style.display === 'none') {
            main.style.display = 'flex';
            success.style.display = 'none';
        } else {
            main.style.display = 'none';
            success.style.display = 'flex';
        }
    });
});
