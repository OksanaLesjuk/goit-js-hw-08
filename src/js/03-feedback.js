
const form = document.querySelector('.feedback-form');
const saveLocalStorage = {};
form.addEventListener('input', onInput);


function onInput(evt) {
    evt.preventDefault();

    if (evt.target.name === 'email' || evt.target.name === 'message') {
        const name = evt.target.name;
        const value = evt.target.value;
        saveLocalStorage[name] = value;

        localStorage.setItem("feedback-form-state", JSON.stringify(saveLocalStorage));
    }
}