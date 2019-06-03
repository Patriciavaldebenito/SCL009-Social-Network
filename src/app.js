// Import logoutMessage function from
// ./assets/js/auth.js
// import { logoutMessage } from './assets/js/auth.js';
import { createUser } from './assets/js/auth.js';
// import { authMail } from './assets/js/auth.js';

// // Call the imported function
// logoutMessage(true);

// // simulación de como se comunica con auth.js
// const loginMail = () => {
//   let inputMail = document.getElementById('input-mail').value;
//   authMail(inputMail)
// }

// //llamado con un addEventlistener a la función loginMail
// document.getElementById('login').addEventListener('click', loginMail)

/*
Lo mismo sería así:
document.getElementById('login').addEventListener('click', () => {
  let inputMail = document.getElementById('input-mail').value;
  if (inputMail !== '' ) {
    authMail(inputMail)
  }
})
*/
/*Si la validación realizada en el archivo validation.js fue true, ingresa al if*/  
document.getElementById('enviando').addEventListener('click', (inputMail,inputPassword )=>{
  
  let inputMail = document.getElementById('input-mail').value;
  let inputPassword = document.getElementById('input-password').value;
 
  createUser(inputMail,inputPassword);
})