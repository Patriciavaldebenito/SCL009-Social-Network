import { templateMuro } from "./templateMuro.js";
import { validationFormSignLogin } from "../controller/validation.js";
import { signLogin } from "../js/firebase_auth.js";

// import { loginGoogle } from "./../js/firebase_auth.js"; **** revisar ruta ****
// import {} from "";

export const templateLogin = () => {
  document.getElementById("root").innerHTML = `<p>Template login</p>
                                               <div id="" class="modal">
                                                   <div class="">
                                                      <h3>usuario logeandose</h3>
                                                      <form id="">
                                                         <div class="input-field">
                                                           <input type="email"  id="signup-email" required />
                                                           <label for="signup-email">email</label>
                                                         </div>
                                                         <div class="input-field">
                                                           <input type="password"  id="signup-password" required />
                                                           <label for="signup-password">password</label>
                                                         </div>
                                                      </form>
                                                   </div>
                                               </div>
                                               <button id="btnLoginDos" class="btn-create">Sign up</button>
                                               <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>`;

  // 1. En Login click en btnLogin
  document.getElementById("btnLoginDos").addEventListener("click", () => {
    // valores desde imput text para function singLogin
    let email = document.getElementById('signup-email').value;

    let password = document.getElementById('signup-password').value;
    console.log(email);
    console.log(password);

    let resSignLogin = validationFormSignLogin(email, password);
    // conditions
    if (resSignLogin) {
      signLogin(email, password);
      console.log("logeado / parametros validados");
      window.location.hash = "#/muro";
    } else {
      console.log("NO     createUser / parametros validos");
    }





  });

  // 2. En login click en btn google
  document.getElementById("buttonGoogle").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");
    //  loginGoogle();
    // ***************** revisar error!!
    templateMuro();
    window.location.hash = "#/muro";
  });

};
