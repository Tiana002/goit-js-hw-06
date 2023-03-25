
const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onSubmit);

function onSubmit (event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;
if(email.value === '' || password.value === '') {
    alert ('Всі поля повинні бути заповнені')
} else {
    const data = { 
        email: email.value,
        password: password.value,
    };
    console.log(data);
}
event.currentTarget.reset()
}

