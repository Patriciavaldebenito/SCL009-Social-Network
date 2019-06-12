//Inicializar con Cloud firestore 

//HU4 Comenzando a Guardar Data
//agregando a la collection Users
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

// HU4 Guardando Data
//agregando a la collection Posts
export let savePostData = () =>{
    let dbPost = firebase.firestore();
    let event = document.getElementById('event').value;
    let address = document.getElementById('address').value;
    let subway = document.getElementById('subway').value;
    let date = document.getElementById('date').value;
    let message = document.getElementById('message').value;

        dbPost.collection("post").add({
            event: event,
            address: address,
            subway: subway,
            date: date,
            message: message       
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById("textpost").value=''; 
            document.getElementById('event').value=''; 
            document.getElementById('address').value=''; 
            document.getElementById('subway').value=''; 
            document.getElementById('date').value=''; 
            document.getElementById('message').value=''; 
            window.location.hash="#/muro";
            /*postRead();  */
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


}


// Read Data documents
export let getDataPost = () =>{
    let db = firebase.firestore();
    let tabla = document.getElementById('tabla');
    let div = documentacion.getElementById('"containerDatosG"');
    db.collection("post").onSnapshot((querySnapshot) => {
        tabla.innerHTML = '';
        
        querySnapshot.forEach((doc) => {

            console.log(`${doc.id} => ${doc.data().user}`);

            tabla.innerHTML += `
            <tr>
            <th scope="row">${doc.data().user}</th>
            <td>${doc.data().event}</td>
            <td>${doc.data().address}</td>
            <td>${doc.data().subway}</td>
            <td>${doc.data().date}</td>
            <td>${doc.data().message}</td>
            </tr>
          `
            div.innerHTML += `
            
            <div>
               <div>${doc.data().user}</div>
               <div>${doc.data().event}</div>
               <div>${doc.data().address}</div>
               <div>${doc.data().subway}</div>
               <div>${doc.data().date}</div>
               <div>${doc.data().message}</div>
               
            <div/>
          `
        });
    });
}


export let getDataRegistry = () =>{
    let db = firebase.firestore();
    let title = document.getElementById('title');
    db.collection("post").onSnapshot((querySnapshot) => {
        title.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().user}`);
            title.innerHTML += `
            <p><a>${doc.data().user}</a></p>
          `
        });
    });
}
// Leer documentos Example
// export let getDataName = () =>{
//     let db = firebase.firestore();
//consulta para obtener los datos del usuario
//     let userProfile = dbProfiles.collection("users").where("email","==",email);
//    
 //.get().then((querySnapshot) => {
//         querySnapshot.forEach((doc)=>{
//             firebase.auth().currentUser.profileName = doc.data().firstname + " " +doc.data().lastname;
//         })
        
//     });
// )}