const signupForm = document.querySelector('#signup-form');

 signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  let email = signupForm['signup-email'].value;

  let password = signupForm['signup-password'].value;
  
  let age = signupForm['signup-age'].value;
  let user= signupForm['signup-user'].value;

  console.log(user);
  console.log(password);
  console.log(age);
  console.log(user);
    

  //  S E P A R A R 




  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
   
    console.log('errorCode');
    console.log('errorMessage');


  });
});

























// // Export logutMessage function
// export const logoutMessage = (status) => {
//     // Check if there's a status
//     if (status) {
//       // If there is, print Goodbye
//       console.log("Goodbye");
//     }
//   }

//   // Export user object
//   export const user = {
//     name: 'ale',
//     job: 'coach'
//   }
  
//   // simulación de como se comunica auth con app.js
//   export const authMail = (email) => {
//     if (email === '') {
//       return alert('No estoy listo para iniciar sesión');
//     }
//     alert(`Vamos a iniciar sesión con el correo: ${email}`)
//   }