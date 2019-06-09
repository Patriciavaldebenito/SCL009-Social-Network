import {
  validationFormRegistre
} from "../controller/validation.js";
import {
  createUser
} from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";
import {
  loginGoogle
} from "./../js/firebase_auth.js";
import {
  templateHome
} from "./templateHome.js";

export const templateRegistre = () => {
  let containerRegistre = document.getElementById("root");
  let contenidoRegistre = `<br>
  <div class="modal" id="modal-signup" >
    <div class="modal-content">
      <h3>Crea tu cuenta</h3>
      <form id="signup-form">

        <div class="row input-field">
          <div class = "col" >
            <input type="text" placeholder="Nombre" class ="inputUser" id="signup-user" />
            <label for="signup-user"></label>
          </div>
        </div>

        <div class="row input-field">
          <div class = "col" >
            <input type="number" placeholder="Edad" class ="inputAge" id="signup-age"/>
            <label for="signup-age"></label>
          </div>
        </div>

        <div class="row input-field">
          <div class = "col" >
            <input type="email" placeholder="Correo" class ="inputEmail" id="signup-email"/>
            <label for="signup-email"></label>
          </div>
        </div>

        <div class="row input-field">
          <div class = "col" >
             <input type="password" placeholder="Contraseña" class ="inputPassword" id="signup-password"/>
             <label for="signup-password"></label>
          </div>
        </div>

        <br>
        <div class = "row" >
          <div class = "col" >
           <button class="btn-create" id="btnRegistre" >Crear</button>
          </div>
        </div>

      </form>

    </div>

    <div class = "row" >
      <div class = "col" >
        <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>
      </div>
    </div>

    <br>

    <div class = "row" >
      <div class = "col" >
        <button id="back" type="button"></button>
      </div>
    </div>

  </div>`;
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
<<<<<<< HEAD

    loginGoogle();


=======
     loginGoogle();
>>>>>>> cf4ab173646aee7dc43a04af7ef362f0dfd3b81c
  });


};