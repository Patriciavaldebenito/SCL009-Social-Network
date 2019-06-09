import { validationFormRegistre } from "../controller/validation.js";
import { createUser } from "./../js/firebase_auth.js";
// import { templateMuro } from "./templateMuro.js";
import { loginGoogle } from "./../js/firebase_auth.js";
import { templateHome } from "./templateHome.js";

export const templateRegistre = () => {
  let containerRegistre = document.getElementById("root");
  let contenidoRegistre = `<br>
  <div class="modal" id="modal-signup" >
    <div class="modal-content">
      <h3>Crea tu cuenta</h3>
      <form id="signup-form">
        <div class="input-field">
          <input type="text" placeholder="Nombre" id="signup-user"/>
          <label for="signup-user"></label>
        </div>
        <div class="input-field">
          <input type="number" placeholder="Edad" id="signup-age"/>
          <label for="signup-age"></label>
        </div>
        <div class="input-field">
          <input type="email" placeholder="Correo" id="signup-email"/>
          <label for="signup-email"></label>
        </div>
        <div class="input-field">
          <input type="password" placeholder="Contraseña" id="signup-password"/>
          <label for="signup-password"></label>
        </div>
        <br>
        <button class="btn-create" id="btnProbando" >Crear</button>
        
      </form>
    </div>
    <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>
    <br>
    <button id="back" type="button"></button>
  </div>  `;
  containerRegistre.innerHTML = contenidoRegistre;

  // 1. En registre click en btn probando ****cambiar name gaba??¡¡
  document.getElementById("btnProbando").addEventListener("click", () => {
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