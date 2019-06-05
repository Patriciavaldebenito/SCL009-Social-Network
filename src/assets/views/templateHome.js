import { templateRegistre } from "./templateAboutRegistre.js";
import { loginGoogle } from "./../js/firebase_auth.js";
import { templateMuro } from "./templateMuro.js";
import { templateLogin } from "./templateProjectLogin.js";

// import { initRealTime } from './../js/firebase_auth.js';

export const templateHome = () => {
 
  document.getElementById("root").innerHTML = `
                                                  <div id="modal-home" class="modal">
                                                  <div class="modal-content">
                                                     <h3>Template Home</h3>
                                                     <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>
                                                     <button id="btnRegistre" class="btn-create">Sign up</button>
                                                     <button id="btnLogin" class="btn-create">Sign up</button>
                                                  </div>
                                               </div>`;

  // initRealTime ();
  //<div id="app" class="title"></div>

  // 1. En home click en btn  registrar
  document.getElementById("btnRegistre").addEventListener("click", () => {
    templateRegistre();
    window.location.hash = "#/registre";
  });

  // 2. En home click en btn google
  document.getElementById("buttonGoogle").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");

  //  const statusUser = () => { observer(); }
  //  console.log("este es el estado del usuario :" + statusUser)

  //   if (statusUser){

      loginGoogle();
      templateMuro();
      window.location.hash = "#/muro";
  //   } 
  
  });

  //3. En home click en btn login
  document.getElementById("btnLogin").addEventListener("click", () => {
    templateLogin();
    window.location.hash = "#/login";
  });
};