import { loginGoogle } from "./../js/firebase_auth.js";
import { templateMuro } from "./templateMuro.js";
import { templateLogin } from "./templateProjectLogin.js";

// import { initRealTime } from './../js/firebase_auth.js';

export const templateHome = () => {

  document.getElementById("root").innerHTML = `
                                                  <div class="modal" id="modal-home" >
                                                  <div class="modal-content">
                                                     <h3>Bienvenidos</h3>
                                                      <form id="home-form">
                                                        <br>
                                                        <button class="btn-google" type="button" id="buttonGoogle">Acceso con Google</button>
                                                        <button class="btn-create" id="btnRegistre" >Registrar</button>
                                                        <button class="btn-create" id="btnLogin" >Entrar</button>
                                                     </form>
                                                  </div>
                                               </div>`;

  // initRealTime ();
  //<div id="app" class="title"></div>

  // 1. En home click en btn  registrar
  document.getElementById("btnRegistre").addEventListener("click", () => {

    window.location.hash = "#/registre";
  });

  // 2. En home click en btn google
  document.getElementById("buttonGoogle").addEventListener("click", () => {
    console.log("presionaste boton google en Home!");



    loginGoogle();
    templateMuro();
    window.location.hash = "#/muro";


  });

  //3. En home click en btn login

  document.getElementById("btnLogin").addEventListener("click", () => {
    window.location.hash = "#/login";
  });





};