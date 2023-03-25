const incrementInput = document.querySelector("#font-size-control");
const onText = document.querySelector("#text");
onText.style.fontSize = incrementInput.value + 'px';

const textResizing = () => {
    onText.style.fontSize = `${incrementInput.value}px`;
};

incrementInput.addEventListener("input", textResizing);