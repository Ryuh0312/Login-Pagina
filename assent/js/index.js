const login= document.querySelector('.login-section');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');

registerLink.onclick= ()=>{
    login.classList.add('active')
}

loginLink.onclick= ()=>{
    login.classList.remove('active')
}