import { validationFormRegistre } from "../controller/validation.js";
import { createUser } from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";
import { loginGoogle } from "./../js/firebase_auth.js";
import { templateHome } from "./templateHome.js";


export const templateRegistre = () => {
  let containerRegistre = document.getElementById("root");

  let contenidoRegistre = ` <div class="demoT">

  
  <img src="https://i.ibb.co/9hHdDmd/logoPano.png" class="img-fluid" >
 
</div>
  <h3 class="parrRegistre">Crea tu cuenta</h3>

  <form id="signup-form">

          <input type="text" placeholder="Nombre" class ="barr inputUser" id="signup-user" />
          <label for="signup-user"></label>

          <input type="number" placeholder="Edad" class ="barr inputAge" id="signup-age"/>
          <label for="signup-age"></label>
   
  
          <input type="email" placeholder="Correo" class ="barr inputEmail" id="signup-email"/>
          <label for="signup-email"></label>
   
           <input type="password" placeholder="Contraseña" class ="barr inputPassword" id="signup-password"/>
           <label for="signup-password"></label>
  
         <button class="btn-createR" id="btnRegistre" >Crear</button>
    
  </form>

  <button class="btn-googleR" type="button" id="buttonGoogle">Acceso con Google</button>

  <button id="back" type="button"></button>
`;
  containerRegistre.innerHTML = contenidoRegistre;

  // 1. En registre click en btn probando ****cambiar name gaba??¡¡
  document.getElementById("btnRegistre").addEventListener("click", (e) => {
    e.preventDefault();
    
    console.log("click en boton registrar");
    let user = document.getElementById("signup-user").value;
    let age = document.getElementById("signup-age").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    let resRegistre = validationFormRegistre(user, age, email, password);

    console.log("la funcion validationFormRegistre lee los 4x y retorna = " + resRegistre);

    if (resRegistre) {
      console.log("al retornar true, se ejecutara createUser");
      createUser(user, age, email, password);
     
      console.log("createUser  ejecutando ");
    } else {
      console.log("NO     createUser / parametros validos");
    }
  });

  document.getElementById('back').addEventListener('click', () => {
    templateHome();
  });

  // 2. En registre click en btn google
  document.getElementById("buttonGoogle").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");

    loginGoogle();


  });


};