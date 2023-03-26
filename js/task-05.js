const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInput);


function onInput (event)  {
    spanEl.textContent = event.currentTarget.value.trim();
    if(spanEl.textContent === '') {
        spanEl.textContent = "Anonymous"
        
    }
}

