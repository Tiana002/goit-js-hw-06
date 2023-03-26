const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", event => {
    let inputValue = (event.currentTarget.value).trim();
    if ( inputValue.length === Number(event.currentTarget.dataset.length))
{ textInput.classList.add("valid");
textInput.classList.remove("invalid");
} else {
    textInput.classList.add("invalid");
textInput.classList.remove("valid");
}
});