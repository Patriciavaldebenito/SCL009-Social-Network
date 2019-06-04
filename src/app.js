// Import logoutMessage function from
import { createUser } from './assets/js/firebase_auth.js';
import { validationForm } from './assets/controller/validation.js';


const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {

  e.preventDefault();
  
  let user = signupForm['signup-user'].value;
  let age = signupForm['signup-age'].value;
  let email = signupForm['signup-email'].value;
  let password = signupForm['signup-password'].value;

  
  let  resultValidationForm = validationForm(user,age,email,password);

  

    if (resultValidationForm === true){ 
      console.log("vamos a crear la function")
       createUser(user, age, email, password);
 
   } 

      alert("la cuenta no ha sido creada"); 
   

})

