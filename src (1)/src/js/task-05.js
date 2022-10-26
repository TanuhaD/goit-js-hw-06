const input = document.getElementById("name-input");
const output = document.getElementById('name-output');
input.addEventListener('input', () => {
    if (input.value === ""){
        output.innerText = "Anonymous";
    }else {
        output.innerText = input.value;
    }
})
console.dir(input);