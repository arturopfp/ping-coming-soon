const RE = /\S+@\S+\.\S+/;
const boton = document.getElementById('boton');
const errorTxt = document.createTextNode('Please provide a valid email address');
const errorContainer = document.getElementById('error-container')


const emailValidation = () => {
    const input = document.getElementById('email')
    const email = input.value;


    if(RE.test(email)) {
        console.log('Success')
    } else {
        input.classList.toggle('input-error');
        errorContainer.appendChild(errorTxt);
        errorContainer.classList.toggle('errorTxt');
    }
}

boton.addEventListener('click', emailValidation);