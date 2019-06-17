import { validationFormPublication } from '../controller/validation.js';

//Inicializar con Cloud firestore 

//HU4 Comenzando a Guardar Data
//agregando a la collection Users
//Datos input template registry 
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
export let savePostData = () => {

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
            // document.getElementById("textpost").value=''; 
            document.getElementById('event').value=''; 
            document.getElementById('address').value=''; 
            document.getElementById('subway').value=''; 
            document.getElementById('date').value=''; 
            document.getElementById('message').value=''; 
            window.location.hash="#/muro";
            
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


}

// ----------------------------------------------------------------------------------------------------
// Read Data documents
// export let getName = () =>{
//     // let usuario 
  
//      let db = firebase.firestore();
//      let app = document.getElementById('container');
//     //  let title = $('#title');
   
//      db.collection('users').onSnapshot((querySnapshot) => {
//         // app.innerHTML = '';
//         querySnapshot.forEach((doc) => {

//             app.innerHTML =`${doc.data().user}`;
//             console.log(doc.data().user);
            
//      })

//      });
//  }

  export let getName = (email) =>{
    let db = firebase.firestore();
    //basedata
    let users = db.collection("users").where("email","==",email);
    users.get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
            firebase.auth().currentUser.name = doc.data().name;
        })
        
    });
}

export const postCreate = () =>{
	let db = firebase.firestore();
	// let date = Date.now();
	
	 firebase.auth().onAuthStateChanged(user => {
	 	
	 	getName(user.email);
	 	db.collection('users').doc(user.id).get().then(doc => {
	 		if(validationFormPublication(event, address, subway, date, message)){
		 		db.collection('post').add({
                    id: user.id,
		 			email: user.email,
		 			user:user.name,
                    event: event,
                    address: address,
                    subway: subway,
                    date: date,
                    message: message 
		 		}).then(function(doc){
                     console.log("Document written with ID: ", doc.id);
                     document.getElementById('id').value=''; 
                     document.getElementById('email').value=''; 
                     document.getElementById('user').value=''; 
		 			document.getElementById('event').value=''; 
                    document.getElementById('address').value=''; 
                    document.getElementById('subway').value=''; 
                    document.getElementById('date').value=''; 
                    document.getElementById('message').value=''; 
                    
                    
                    document.getElementById('posts').innerHTML +=
  		  		`<div class="container container__post">
			  		<div class="row templatemuro">
				  		<div class="img-person col-12">
				  			<div class="row img">
			  					<img src="assets/img/iconuser.jpg" alt="" />
			  					<p class="msge" id="name">${doc.data().name}</p>
			  					<p class="msge" id="messa">${message}</p>
				  			</div>	
				  		</div>		
				  		<div id="msg${doc.id}" class="post col-12"> 
				  			<p class="msge">${doc.data().message}</p> 
				  		</div>
				  		<div class="input col-12">
				  			<input class="msge" id="inp${doc.id}" type="text">				  				
                        </div>
                    </div>	
                </div>`;

                    window.location.hash="#/muro";
		 			

		 		}).catch(function(error) {
	            console.error("Error adding document: ", error);
				});

			}else{
				console.log('error de validacion del post')
				//return "error de validacion del post";

			}
	 	});
	 });
}


// Read Data documents
// export let getDataPost = () =>{
//     let db = firebase.firestore();
//     let tabla = document.getElementById('tabla');
//     // getName(user.email);
//     db.collection("post").onSnapshot((querySnapshot) => {
//        tabla.innerHTML = '';
//         // usar parametro user
//         querySnapshot.forEach((doc) => {

//             console.log(`${doc.id} => ${doc.data().user}`); // dato nombre usuario con id 
//             console.log( doc.data());// json con los valores ingresados para publicar el evento

//             tabla.innerHTML += `
//             <div>
//             <tr>
//             <!--<th scope="row">${doc.data().user}</th>-->
//             <td>${doc.data().event}</td>
//             <!--<td>${doc.data().address}</td>-->
//             <td>${doc.data().subway}</td>
//             <td>${doc.data().date}</td>
//             <td>${doc.data().message}</td>
//             </tr>
//             </div>
//           `
          
//         });
//     });
// }
