import { validationFormRegistre } from "../controller/validation.js";
import { createUser } from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";
import { loginGoogle } from "./../js/firebase_auth.js";


export const templateRegistre = () => {
  let containerRegistre = document.getElementById("root");
  let contenidoRegistre = ` 
  <div class="modal" id="modal-signup" >
    <div class="modal-content">
      <h3>Crea tu cuenta</h3>
      <form id="signup-form">
        <div class="input-field">
          <input type="user"  id="signup-user"/>
          <label for="signup-user">usuario</label>
        </div>
        <div class="input-field">
          <input type="number"  id="signup-age"/>
          <label for="signup-age">edad</label>
        </div>
        <div class="input-field">
          <input type="email"  id="signup-email"/>
          <label for="signup-email">email</label>
        </div>
        <div class="input-field">
          <input type="password"  id="signup-password"/>
          <label for="signup-password">password</label>
        </div>
        <br>
        <button id="btnProbando"class="btn-create">Crear</button>
      </form>
    </div>
  </div> 
  <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>`;

  containerRegistre.innerHTML = contenidoRegistre;

  // 1. En registre click en btn probando ****cambiar name gaba??¡¡
  document.getElementById("btnProbando").addEventListener("click", () => {
    let user = document.getElementById("signup-user").value;
    let age = document.getElementById("signup-age").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let resRegistre = validationFormRegistre(user, age, email, password);
    console.log(resRegistre);

    if (resRegistre) {
      createUser(user, age, email, password);
      console.log("createUser  / parametros validados");
    } else {
      console.log("NO     createUser / parametros validos");
    }
  });

  // 2. En registre click en btn google
  document.getElementById("buttonGoogle").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");

     loginGoogle();
    
  
  });
  
  
};