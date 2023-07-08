
const form = document.querySelector('.feedback-form');
const fieldEmail = document.querySelector('input[name="email"]');
const fieldMessage = document.querySelector('textarea')

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

savedTextInField()

let objectDataForm = {};

function onInput(evt) {
    evt.preventDefault();

    objectDataForm = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

    objectDataForm[evt.target.name] = evt.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(objectDataForm));

}


function savedTextInField() {

    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

    if (savedFormData.email) {
        fieldEmail.value = savedFormData.email;
    }
    if (savedFormData.message) {
        fieldMessage.value = savedFormData.message;
    }


}

function onSubmit(evt) {
    evt.preventDefault();
    if (!fieldEmail.value || !fieldMessage.value) {
        alert("Заповніть всі поля форми ");
    }

    console.log(objectDataForm);

    localStorage.removeItem("feedback-form-state");
    evt.currentTarget.reset();

}