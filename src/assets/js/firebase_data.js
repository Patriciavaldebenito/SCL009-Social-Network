//Inicializar con Cloud firestore   
//agregando a la colletion User
export let saveRegistryData = ()=> {
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
//leer documentos
export const getName = (email) =>{
    let dbProfiles = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().email}`);
        });
    });

}




// HU4 para crear post
export const postCreate = (userPost) =>{
    let dbPost = firebase.firestore();
    if(validatePost(userPost)){
        /*let date=Date.now(); example
        */
        /*let nameProfile = validateName(); example
       */
        let event = document.getElementById('event').value;
        let adrees = document.getElementById('adrees').value;
        let subway = document.getElementById('subway').value;
        let date = document.getElementById('date').value;
        let message = document.getElementById('message').value;

        dbPost.collection("post").add({
            user: firebase.auth().currentUser.email,
            nameevent: nameevent,
            adrees: adrees,
            subway: subway,
            date: date,
            message: message       
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("textpost").value=''; 
            window.location.hash="#/muro";
            /*postRead();  */
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }else{
        return "error input vacío";
    }
    
}

// Leer documentos Example
// export const getName = (email) =>{
//     //consulta para obtener los datos del usuario
//     let dbProfiles = firebase.firestore();
//     let userProfile = dbProfiles.collection("users").where("email","==",email);
//     userProfile.get().then((querySnapshot) => {
//         querySnapshot.forEach((doc)=>{
//             firebase.auth().currentUser.profileName = doc.data().firstname + " " +doc.data().lastname;
//         })
        
//     });
// }

