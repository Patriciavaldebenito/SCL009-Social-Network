// // Import logoutMessage function from
// import { createUser } from './assets/js/firebase_auth.js';
// import { validationForm } from './assets/controller/validation.js';


// // Evento para Formulario Registro
// const signupForm = document.querySelector('#signup-form');

// signupForm.addEventListener('submit', (e) => {

//   e.preventDefault();
  
//   let user = signupForm['signup-user'].value;
//   let age = signupForm['signup-age'].value;
//   let email = signupForm['signup-email'].value;
//   let password = signupForm['signup-password'].value;

  
//   let  resultValidationForm = validationForm(user,age,email,password);
//      //true
  

//     if(resultValidationForm){ 
//         console.log("ok")
//        createUser(user, age, email, password);
 
//     } 

//       else {alert("la cuenta no ha sido creada");}
   

// })



// // Eventos de botones templeHome

// document.getElementById('btnRegistre').addEventListener('click', () => {
//   templateRegistre(); // ir alli
//   window.location.hash = '#/registre';
// })

// document.getElementById('btnLogin').addEventListener('click', () => {
//   templateLogin(); // ir alli
//   window.location.hash = '#/login';
// })