const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);
inputEl.addEventListener("blur", onCleanInput);

function onInput (event)  {
    spanEl.textContent = event.currentTarget.value;
    
}

function onCleanInput (event) {
    if(spanEl.textContent === '') {
        spanEl.textContent = "Anonymous"
    }
}