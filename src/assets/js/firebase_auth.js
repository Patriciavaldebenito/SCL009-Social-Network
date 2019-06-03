// Function createUser
export let createUser = (inputMail,inputPassword) =>{
  
  let dbProfiles = firebase.firestore();
  firebase.auth().createUserWithEmailAndPassword(inputMail, inputPassword) 
  .then(function(){
    /*Base de datos, para almacenar de manera paralela en cloud firestore 
    dichos datos del usuario*/
    dbProfiles.collection("users").add({
      inputMail : emailNewUser,
      inputPassword :passwordNewUser
    })
  })
}




// Export logutMessage function
export const logoutMessage = (status) => {
  // Check if there's a status
  if (status) {
    // If there is, print Goodbye
    console.log("Goodbye");
  }
}

// Export user object
export const user = {
  name: 'ale',
  job: 'coach'
}

// simulación de como se comunica auth con app.js
export const authMail = (email) => {
  if (email === '') {
    return alert('No estoy listo para iniciar sesión');
  }
  alert(`Vamos a iniciar sesión con el correo: ${email}`)
}