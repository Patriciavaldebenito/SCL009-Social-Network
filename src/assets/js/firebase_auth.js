export const createUser = (user, age, email, password) => {
  console.log(user);
  console.log(age);
  console.log(email);
  console.log(password);


  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      console.log("se creo usuario en firebase");
      verificationEmail();
     

    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  // let db = firebase.firestore();
  // firebase.auth().createUserWithEmailAndPassword(email, password)
  // .then(function(){
  //   /*Base de datos, para almacenar de manera paralela en cloud firestore
  //   dichos datos del usuario*/
  //        db.collection('users').add({
  //         email:email,
  //         password:password
  //        })
  // })

  // .then(function(docRef){
  //   console.log("Document written with ID: ", docRef.id);
  // })

  // .catch(function(error){
  //   console.error("Error  adding document: ", error);
  // });
};

// Function loginGoogle
export const loginGoogle = () => {

  console.log("click en LOGINGOOGLE hacemos correr su funcion? sii!! ")
  // 1. Crea una instancia del objeto del proveedor de Google:
  var provider = new firebase.auth.GoogleAuthProvider();
  // 2.3.4 opcionales
  // 5. Autenticar con Firebase a través del objeto del proveedor de Google.
  // Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  })
    .then(

      function changeMuro() {

        window.location.hash = "#/muro";
      })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

}

export const signLogin = (email, password) => {
  console.log("antes de realizar signLogin ");
  // let user = firebase.auth().currentUser;
  // var emailVerifiedReturn = user.emailVerified;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {

      
        window.location.hash = "#/muro"; 
     
    
     //si user.verified es true entonces se va al muro 
      }
      // se desarrolla la funcon de login 
      // se desarrolla function de validacion email
      // si user.verified es positivo 
      // entonces 
    )
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  
}

export const observer = () => {

  firebase.auth().onAuthStateChanged(function (user) {
   
    if (user) {
      console.log(user);
      console.log("existe usuario activo");
      console.log("*****************");
      console.log(user.emailVerified);
      console.log("*****************");
      // aparece(user);
      var email = user.email;
      var displayName = user.displayName;
      console.log("displayName = " +displayName);

      var  emailVerified = user.emailVerified;

      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      // User is signed in.

    } else {
      console.log("  NO    existe usuario Activo   ");
      // User is signed out.
      // ...
    }
  });
  //email-password.html
}

// export const  aparece = (user) => {
//  var user = user; 
//  if(user.emailVerified){
//    console.log("el valor de user es = " + user + "y user.emailverified es = " + user.emailVerified);
//    console.log("el mail fue verificado porque el observador ya se ejecuto, se desarrolla sign ");
//    return true;
//  }

// }






export const verificationEmail = () => {
  
  // para enviar un mensaje de direccion a un usuario ...
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  
  .then(function () {

  
    window.location.hash= "#/login";
   
  
  })
    .catch(function (error) {
      console.log("no se envia correo de verificacion");
      // Ha ocurrido un error.
      
    });

};

export const signOutRedSocial = () => {

  firebase.auth().signOut().then(function () {

    // aqui no va al login aqui se cierra la sesion hacer un cuadro de salida 
    console.log("La sesion ha sido cerrada...");
    window.location.hash = "#/signOut";
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });


}

//Conectar Basedatos RealTime

// export const initRealTime = () => {
//   let app = document.getElementById('app');
//   let dbref = firebase.database().ref('titulo');

//   dbref.on('value')
//     .then(function (snap) {
//       app.innerText = snap.val()

//     })
// }
//first example 
/*
let $title = $('#title');
let database = firebase.database().ref().child('titulo');
database.on("value", function(snapshot) {
$title.text(snapshot.val());
})
*/

