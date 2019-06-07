export const createUser = (user, age, email, password) => {
  console.log(user);
  console.log(age);
  console.log(email);
  console.log(password);
 
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      window.location.hash = "#/login";
      const verificationEmailGoToLogin = verificationEmail();
      verificationEmailGoToLogin = false; 
     
     
      console.log("estamos llendo al login desde registro lleno");
        
      
        if(!verificationEmailGoToLogin){
          observer();
          console.log("el usuario entra, va al formulario de registro, procesa la funcion de creacion de usuario, verifica cada input, luego se almacena el firebase y se asume activo ...luego se manda a login");
  
        }
       
      
    
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

export const verificationEmail = () => {
  // para enviar un mensaje de direccion a un usuario ...
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function () {

    console.log("enviando correo");
      return true;
  })
    .catch(function (error) {
      
      console.log("no se envia correo de verificacion");
      // Ha ocurrido un error.
      return false;
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
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  })
    .then(

      function changeMuro() {
        window.location.hash = "#/login";
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

export const signLogin = (email,password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(){
    window.location.hash = "#/muro";
    console.log("como ya es usuario puede entrar al muro jejej")

  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}


// 1.añadir un listener en tiempo real
// si el usuario esta logeado aparece boton para salir 
// qe aparesca el muro 

//2. ir a nueva actividad que muestra la identidad del usuario y el ID del usuario en firebase asociado a esa identidad 
// se vera si el correo ha sido verificado
// inicialmente o ha de ser verificado
// hay un boton que permite verificarlo
// una vez que el usuario hace click en el boton (enviado a su correo) este correo contendra un enlace 
// y una vez que se haga click en el enlace se verificara la cuenta 

export const observer = () => {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("Existe usuario Activo");
     

      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {

      console.log("  NO    existe usuario Activo   ");
      


      // User is signed out.
      // ...
    }
  });

  //email-password.html

}

export const signOutRedSocial = () => {

  firebase.auth().signOut().then(function () {
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
