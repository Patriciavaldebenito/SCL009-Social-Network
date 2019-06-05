import { validationForm } from "./../controller/validation.js";
import { createUser } from "./../js/firebase_auth.js";
import { templateMuro } from "./templateMuro.js";

export const templateRegistre = () => {
  let containerRegistre = document.getElementById("root");
  let contenidoRegistre = ` 
  <div id="modal-signup" class="modal">
    <div class="modal-content">
      <h3>Crea tu cuenta</h3>
      <form id="signup-form">
        <div class="input-field">
          <input type="user"  id="signup-user" required />
          <label for="signup-user">usuario</label>
        </div>
        <div class="input-field">
          <input type="number"  id="signup-age" required />
          <label for="signup-age">edad</label>
        </div>
        <div class="input-field">
          <input type="email"  id="signup-email" required />
          <label for="signup-email">email</label>
        </div>
        <div class="input-field">
          <input type="password"  id="signup-password" required />
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
    let res = validationForm(user, age, email, password);
    console.log(res);

    if (res) {
      createUser(user, age, email, password);
      templateMuro();
      console.log("si entra");
    } else {
      console.log("no entra");
    }
  });

  // 2. En registre click en btn google
  document.getElementById("buttonGoogle").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");
    //  loginGoogle();
    // ***************** revisar error!!
    templateMuro();
    window.location.hash = "#/muro";
  });
  
};

//   document.getElementById('btnLogin').addEventListener('click', () => {

//     templateLogin(); // ir alli
//     window.location.hash = '#/login';
//   })
// }

//   // llamar a la función que carga el template project
//   // cambiar el hash a #/project