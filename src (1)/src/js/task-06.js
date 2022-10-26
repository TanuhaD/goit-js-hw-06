const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
    const length = +input.dataset.length;
    if (input.value.length === length){
        input.classList.add("valid")
        input.classList.remove("invalid")
    }else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
})