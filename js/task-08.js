
const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onSubmit);

function onSubmit (event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;
if(email.value.trim() === '' || password.value.trim() === '') {
    alert ('Всі поля повинні бути заповнені')
    return;
} else {
    const data = { 
        email: email.value.trim(),
        password: password.value.trim(),
    };
    console.log(data);
}
event.currentTarget.reset()
}


