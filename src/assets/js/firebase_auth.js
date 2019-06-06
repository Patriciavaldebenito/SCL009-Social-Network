  export const createUser = (user, age, email, password) => {
  console.log(user);
  console.log(age);
  console.log(email);
  console.log(password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      confirmationEmail();
    })
    .catch(function(error) {
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

export const confirmationEmail = () => {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function() {
      console.log("estoy aqui casi envio tu mensaje de confirmacion");
    })
    .catch(function(error) {
      // Ha ocurrido un error.
    });

};

// Function loginGoogle
export const loginGoogle = () => {

  console.log("click en LOGINGOOGLE hacemos correr su funcion? sii!! ")
  // 1. Crea una instancia del objeto del proveedor de Google:
  var provider = new firebase.auth.GoogleAuthProvider();
  // 2.3.4 opcionales
  // 5. Autenticar con Firebase a través del objeto del proveedor de Google.
  // Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
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


export const observer = () => {

  firebase.auth().onAuthStateChanged(function(user) {

    if (user) { 
      console.log("si señor !! el usuario ha sido creado jo jo -- if del observador ");
      // User is signed in.
    } else {
      // No user is signed in.
      console.log("nones :( -- if del observador ");
    }
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
