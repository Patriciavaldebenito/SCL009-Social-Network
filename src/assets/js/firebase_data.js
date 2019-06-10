
//Inicializar con Cloud firestore   
//agregando a la colletion
export let SaveRegistryData = ()=> {
let db = firebase.firestore();



  let user = document.getElementById('signup-user').value;
  let age = document.getElementById('signup-age').value;
  let email = document.getElementById('signup-email').value;
  let password = document.getElementById('signup-password').value;

  db.collection("users").add({
    user: user,
    age: age,
    email: email,
    password: password
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}