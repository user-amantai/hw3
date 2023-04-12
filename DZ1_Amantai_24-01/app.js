const object = document.querySelector('#object')
const square = document.querySelector('#square')

const emailInput = document.querySelector('#email')
const emailCheck = document.querySelector('#emailCheck')
const passwordInput = document.querySelector('#password')
const checkbox = document.querySelector('#checkbox')
const passwordCheck = document.querySelector('#passwordCheck')
const passwordRepeat = document.querySelector('#passwordRepeat')
const passwordRepeatCheck = document.querySelector('#passwordRepeatCheck')
const save = document.querySelector('#save')
const saveForm = document.querySelector('#saveForm')
const emailRegExp = /@/
const passwordRegExp = /^(?=.*\d)(?=.*[A-Za-z])/

emailInput.addEventListener('input', () => {
    if (emailRegExp.test(emailInput.value) === true){
        emailCheck.innerText = '✓';
        emailCheck.style.color = 'greenyellow';
    }
    else {
        emailCheck.innerText = '✖';
        emailCheck.style.color = 'red';
    }
})
passwordInput.addEventListener('input', () => {
    if (passwordRegExp.test(passwordInput.value) === true){
        passwordCheck.innerText = '✓';
        passwordCheck.style.color = 'greenyellow';
    }
    else {
        passwordCheck.innerText = '✖';
        passwordCheck.style.color = 'red';
    }
    }
)
passwordRepeat.addEventListener('input', () => {
    if (passwordInput.value === passwordRepeat.value) {
        passwordRepeatCheck.innerText = '✓';
        passwordRepeatCheck.style.color = 'greenyellow';
    } else {
        passwordRepeatCheck.innerText = '✖';
        passwordRepeatCheck.style.color = 'red';
    }
})
let view = () => {
    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    } if (checkbox1.checked) {
        passwordRepeat.type = 'text';
    } else {
        passwordRepeat.type = 'password';
    }
}
checkbox.onclick = (view)
checkbox1.onclick = (view)
save.onclick = () => {
    if(emailCheck.style.color === 'greenyellow' && passwordCheck.style.color === 'greenyellow' && passwordRepeatCheck.style.color === 'greenyellow'){
        saveForm.innerHTML = 'Ваши данные сохранились'
        saveForm.style.color = 'green'
    } else {
        saveForm.innerHTML = 'Вы ввели не корректно!'
        saveForm.style.color = 'red'
    }
}
