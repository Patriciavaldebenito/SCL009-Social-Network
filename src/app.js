// Import logoutMessage function from
import { createUser } from './assets/js/firebase_auth.js';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {

  e.preventDefault();
  
  let user = signupForm['signup-user'].value;
  let age = signupForm['signup-age'].value;
  let email = signupForm['signup-email'].value;
  let password = signupForm['signup-password'].value;

  // resultValidationForm(validateForm);

  createUser(user, age, email, password); 

})